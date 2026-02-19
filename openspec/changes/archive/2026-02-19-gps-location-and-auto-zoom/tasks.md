## 1. Geolocation Integration

- [x] 1.1 Implement helper to detect if the device is mobile/large screen
- [x] 1.2 Add Geolocation API permission request on application load
- [x] 1.3 Implement `getCurrentPosition` logic to initialize `myPos`
- [x] 1.4 Set up a 5-second interval for automatic position updates on mobile devices
- [x] 1.5 Update `createMyMarker` to disable `draggable` on mobile devices

## 2. Map View & Auto-Zoom

- [x] 2.1 Implement `fitAllUsers` function using `maplibregl.LngLatBounds`
- [x] 2.2 Trigger `fitAllUsers` whenever a user joins, moves, or leaves
- [x] 2.3 Add a window `resize` listener to re-trigger auto-zoom on orientation changes
- [x] 2.4 Add a debounced or threshold check to prevent excessive auto-zoom jitter

## 3. UI Enhancements

- [x] 3.1 Create the "Center on Me" button element in the HUD overlay
- [x] 3.2 Implement the click handler for "Center on Me" using `map.flyTo` or `map.panTo`
- [x] 3.3 Add a visual indicator for GPS status (Active/Denied/Searching) in the HUD panel