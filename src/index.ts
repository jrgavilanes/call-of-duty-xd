import index from "./public/index.html";

interface UserState {
    id: string;
    name: string;
    color: string;
    pos: { lng: number; lat: number };
}

const users = new Map<string, UserState>();

const server = Bun.serve<{ socketId: string }>({
    port: 3001,
    async fetch(req, server) {
        // 1. Intentar upgrade de WebSocket primero
        const socketId = crypto.randomUUID();
        if (server.upgrade(req, { data: { socketId } })) {
            return;
        }

        const url = new URL(req.url);

        // 2. Rutas estáticas si no es un WebSocket
        if (url.pathname === "/") {
            return new Response(Bun.file("./src/public/index.html"), { headers: { "Content-Type": "text/html" } });
        }
        if (url.pathname === "/manifest.json") return new Response(Bun.file("./src/public/manifest.json"), { headers: { "Content-Type": "application/manifest+json" } });
        if (url.pathname === "/sw.js") return new Response(Bun.file("./src/public/sw.js"), { headers: { "Content-Type": "application/javascript" } });
        if (url.pathname === "/icon-512.png") return new Response(Bun.file("./src/public/icon-512.png"), { headers: { "Content-Type": "image/png" } });

        return new Response("Not Found", { status: 404 });
    },
    websocket: {
        open(ws) {
            console.log(`Socket ${ws.data.socketId} connected`);
        },
        message(ws, message) {
            try {
                const data = JSON.parse(message.toString());
                const socketId = ws.data.socketId;

                switch (data.type) {
                    case "join":
                        const newUser: UserState = {
                            id: socketId,
                            name: data.name || "Anonymous",
                            color: data.color || "#00ff00",
                            pos: data.pos || { lng: -0.443, lat: 39.502 }
                        };
                        users.set(socketId, newUser);
                        
                        // Send current users to the new user
                        ws.send(JSON.stringify({
                            type: "init",
                            users: Array.from(users.values()),
                            yourId: socketId
                        }));

                        // Broadcast new user to everyone else
                        server.publish("hud-updates", JSON.stringify({
                            type: "user-joined",
                            user: newUser
                        }));
                        ws.subscribe("hud-updates");
                        break;

                    case "move":
                        const user = users.get(socketId);
                        if (user) {
                            user.pos = data.pos;
                            server.publish("hud-updates", JSON.stringify({
                                type: "user-moved",
                                id: socketId,
                                pos: data.pos
                            }));
                        }
                        break;
                }
            } catch (err) {
                console.error("Error processing message:", err);
            }
        },
        close(ws) {
            const socketId = ws.data.socketId;
            if (users.has(socketId)) {
                users.delete(socketId);
                server.publish("hud-updates", JSON.stringify({
                    type: "user-left",
                    id: socketId
                }));
            }
            console.log(`Socket ${socketId} disconnected`);
        },
    },
});

console.log(`HUD Server running at ${server.url}`);
