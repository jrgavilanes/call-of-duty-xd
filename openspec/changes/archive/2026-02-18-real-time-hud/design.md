## Context

Creating a real-time HUD using Bun.js and MapLibre. The application needs to handle multiple concurrent users, synchronizing their positions and identities (name/color) across all connected clients.

## Goals / Non-Goals

**Goals:**
- Real-time position updates for all connected users.
- Full-screen mobile-first map interface centered in Paterna.
- Simple user identification (name and marker color).
- Automatic cleanup of markers on disconnect.
- Use of Vue 3 and TailwindCSS via CDN for rapid MVP development.

**Non-Goals:**
- Persistence (no database for now).
- Authentication (no passwords, just a display name).
- Complex map styles or routing.

## Decisions

### 1. Bun WebSockets for Real-time Sync
- **RATIONALE**: Bun provides a high-performance, built-in WebSocket API that is easy to use and integrates seamlessly with its HTTP server.
- **ALTERNATIVES**: Socket.io (too heavy for this MVP), plain Node.js `ws` (requires more setup).

### 2. Vue 3 + Tailwind via CDN
- **RATIONALE**: Speed of development for a single-file MVP. Avoids build steps (npm install, vite, etc.) for the frontend part of the prototype.
- **ALTERNATIVES**: Full Vite/React setup (too much overhead for a simple map screen).

### 3. MapLibre GL JS
- **RATIONALE**: Open-source, high-performance vector map library. Compatible with Mapbox styles but without the licensing overhead for this stage.
- **ALTERNATIVES**: Leaflet (less performant for vector tiles/smooth movement), Mapbox (license/API key requirements).

### 4. Draggable Markers for Movement Simulation
- **RATIONALE**: Instead of using actual GPS (which can be tricky for testing indoors), draggable markers allow users to "move" their avatar and see the change reflected on other screens instantly.

## Risks / Trade-offs

- **[Risk] State Loss** → **[Mitigation]** Since there's no database, a server restart will clear all active users. This is acceptable for an MVP.
- **[Risk] Latency** → **[Mitigation]** Bun's native WebSockets minimize overhead. Updates will be broadcasted immediately.
- **[Risk] Multiple Users with Same ID** → **[Mitigation]** Server will assign a unique socket ID to each connection to differentiate users even if they choose the same name.
