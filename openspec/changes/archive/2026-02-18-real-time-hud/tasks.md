## 1. Backend: Bun WebSocket Server

- [x] 1.1 Implement static file server for `src/public/index.html`
- [x] 1.2 Implement WebSocket server handling `upgrade` requests
- [x] 1.3 Create user registry and ID generation logic
- [x] 1.4 Handle `user-joined` broadcasting (all users to new client, new user to others)
- [x] 1.5 Handle `position-update` broadcasting
- [x] 1.6 Handle `user-left` cleanup and broadcasting on disconnect

## 2. Frontend: Map Interface (HTML/CSS)

- [x] 2.1 Scaffold `src/public/index.html` with Vue 3 and TailwindCSS CDN
- [x] 2.2 Add MapLibre GL JS CSS and JS CDNs
- [x] 2.3 Implement full-screen map container and layout
- [x] 2.4 Create the "Identity Overlay" (name/color input) with HUD styling

## 3. Frontend: Logic & Synchronization

- [x] 3.1 Initialize MapLibre centered in Paterna [39.502, -0.443]
- [x] 3.2 Implement WebSocket client connection and event listeners
- [x] 3.3 Create local draggable marker upon joining
- [x] 3.4 Sync local marker movement with the server via WebSocket
- [x] 3.5 Implement dynamic marker creation/update/removal based on server messages
- [x] 3.6 Add custom HUD-style styling to markers and UI elements

## 4. Verification & Testing

- [x] 4.1 Verify multiple connections can see each other
- [x] 4.2 Verify marker dragging updates across all windows
- [x] 4.3 Verify marker removal when a client closes the tab
- [x] 4.4 Verify mobile-responsive full-screen layout
