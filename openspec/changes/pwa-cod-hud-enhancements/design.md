## Context

The current implementation focuses on fitting all users into the viewport and restricts the PWA to portrait mode. The visual style is functional but lacks a distinct tactical "COD-style" identity. GPS updates are currently limited by distance but not by time, which can impact battery life.

## Goals / Non-Goals

**Goals:**
- Enable flexible screen orientation (Landscape).
- Shift from "Squad Overview" to "Operator Centric" camera management.
- Enhance visual immersion with high-contrast tactical overlays and animations.
- Optimize battery usage via time-based GPS throttling.

**Non-Goals:**
- Implementing a full backend persistence layer for history.
- Changing the underlying MapLibre/Bun architecture.

## Decisions

### 1. Persistent User Centering
- **Decision**: Remove `fitAllUsers` and `debouncedFit` logic.
- **Rationale**: A tactical HUD typically focuses on the user's immediate surroundings. Centering on "Self" provides a more stable and predictable interface for the operator.
- **Implementation**: The map camera will follow the user's marker coordinates on every valid GPS update.

### 2. PWA Orientation Flex
- **Decision**: Update `manifest.json` `orientation` to `any`.
- **Rationale**: Allows users to mount devices horizontally (e.g., in a vehicle or tactical vest).
- **Implementation**: Layout adjustments using CSS media queries to ensure HUD panels don't overlap with map controls in wide viewports.

### 3. Sonar Visual Stack
- **Decision**: Use a combination of CSS `filter` and a custom pulse overlay.
- **Rationale**: CSS filters are performant and easily toggled.
- **Implementation**:
    - **Green Overlay**: A full-screen fixed `div` with `pointer-events: none` using `background: rgba(0, 255, 0, 0.05)` and `backdrop-filter: sepia(100%) hue-rotate(80deg) brightness(0.8) contrast(1.2)`.
    - **Sonar Pulse**: A radial gradient animation starting from the screen center, expanding and fading out every 4 seconds.

### 4. Hybrid GPS Throttling
- **Decision**: Add a 10-second time floor to WebSocket emissions.
- **Rationale**: Prevents excessive radio usage and battery drain while maintaining sufficient tactical awareness for a walking/driving pace.
- **Implementation**: Store `lastEmitTimestamp`. Only send `move` messages if `currentTime - lastEmitTimestamp >= 10000` AND the distance threshold is met.

## Risks / Trade-offs

- **[Risk] Visibility in Sunlight**: Green filters can reduce contrast in direct sunlight. 
    - **Mitigation**: Use `brightness` and `contrast` filters to ensure the black/green HUD elements remain sharp.
- **[Risk] Loss of Squad Awareness**: By centering on "Me", other users might fall off-screen.
    - **Mitigation**: The "Squad List" in the HUD already shows the number of users; future iterations could add "off-screen" indicators (pointers at the edge of the screen).
- **[Risk] GPS Latency**: A 10s throttle means a user moving at 50km/h could travel ~140m between updates.
    - **Mitigation**: This is acceptable for a tactical HUD where absolute real-time precision is traded for battery endurance.
