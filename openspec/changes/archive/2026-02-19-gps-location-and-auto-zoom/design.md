## Context

The current application allows users to join a map-based real-time HUD and manually simulate movement by dragging their own marker. This change aims to transition to real-time GPS tracking on mobile devices, while keeping manual simulation for desktop users. Additionally, it introduces auto-zoom to keep all users in view and a "Center on Me" feature for better navigation.

## Goals / Non-Goals

**Goals:**
- Automatically request and use GPS position if available and granted.
- Implement device-aware behavior: periodic GPS updates on mobile vs. manual drag on desktop.
- Implement an auto-zoom feature that fits all active user markers within the viewport.
- Provide a "Center on Me" button in the HUD.
- Ensure the map view recalculates correctly on screen orientation changes.

**Non-Goals:**
- Background location tracking (app must be active).
- High-precision navigation or routing features.
- Persisting GPS coordinates between sessions beyond the current browser session.

## Decisions

### 1. Geolocation Strategy
- **Decision**: Use `navigator.geolocation.watchPosition` for real-time tracking on mobile.
- **Rationale**: `watchPosition` is more efficient than `getCurrentPosition` with a manual `setInterval` as it relies on system-level changes, but for the specific requirement of "every 5 seconds", a controlled `setInterval` with `getCurrentPosition` might be more predictable for UI updates and battery saving if needed. However, per requirements, we'll implement a 5-second interval check.
- **Alternatives**: Using `watchPosition` directly. We'll stick to a 5-second poll if `watchPosition` isn't used to ensure the "every 5 seconds" requirement is explicitly met.

### 2. Device Detection (Mobile vs. Desktop)
- **Decision**: Use screen width threshold (e.g., `< 1024px`) combined with `navigator.maxTouchPoints > 0` to differentiate between mobile/touch devices and desktop.
- **Rationale**: Simple and effective for UI-level behavior branching without complex user-agent parsing.

### 3. Auto-Zoom Implementation
- **Decision**: Use `maplibregl.LngLatBounds` and `map.fitBounds()`.
- **Rationale**: Native MapLibre method that handles the math for fitting multiple points into a view with configurable padding.

### 4. Orientation Handling
- **Decision**: Listen to the `resize` event on the window and re-trigger `fitBounds`.
- **Rationale**: Browsers trigger `resize` when orientation changes, and it's the most reliable way to know the viewport dimensions have changed.

## Risks / Trade-offs

- **[Risk] Battery Drain** → Continuous GPS use on mobile can drain battery. **Mitigation**: Only track while the app is in the foreground and the user is joined.
- **[Risk] Permission Denial** → User might refuse GPS. **Mitigation**: UI must fall back gracefully to manual simulation (on desktop) or a fixed starting point (on mobile) with a clear status indicator if possible.
- **[Risk] Visual "Jitter" with Auto-Zoom** → Constant fitting while many users move can be disorienting. **Mitigation**: Use smooth transitions (`linear: true` or `animate: true`) and consider a debounced or threshold-based update for auto-zoom.
