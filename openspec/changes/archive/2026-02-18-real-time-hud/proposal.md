## Why

The goal is to create a real-time HUD (Heads-Up Display) similar to "Call of Duty" for tracking connected users (teammates) on a map. This MVP provides a mobile-first, real-time synchronization system using Bun.js, WebSockets, and MapLibre.

## What Changes

- **Single Page Application**: A unified `index.html` using Vue 3 (via CDN) and TailwindCSS for a full-screen mobile experience.
- **MapLibre Integration**: A full-screen map centered in Paterna, Spain, using a high-quality map layer.
- **Identity System**: A simple UI for users to set their name and marker color.
- **Real-time Synchronization**:
    - Automatic addition/removal of markers when users connect/disconnect.
    - Drag-and-drop marker simulation to update positions across all connected clients in real-time via WebSockets.
- **Mobile-First Design**: Optimized for touch interactions and full-screen display.

## Capabilities

### New Capabilities
- `real-time-hud-server`: A Bun-based WebSocket server to manage user sessions and coordinate position updates.
- `map-interface`: A Vue-based frontend using MapLibre with draggable markers and custom HUD styling.

### Modified Capabilities
- None.

## Impact

- **New Files**: `src/index.ts` (server logic) and `src/public/index.html` (frontend logic).
- **Dependencies**: Bun, MapLibre GL JS, Vue 3 (CDN), TailwindCSS (CDN).
