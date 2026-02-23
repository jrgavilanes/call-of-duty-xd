## 1. PWA & Layout Enhancements

- [x] 1.1 Update `src/public/manifest.json` to set `orientation` to `any`
- [x] 1.2 Add CSS media queries to `src/public/index.html` for landscape-specific HUD positioning
- [x] 1.3 Adjust HUD overlay z-index and padding to ensure compatibility with mobile browser UI in landscape

## 2. Tactical Map Interface

- [x] 2.1 Update `initMap` in `src/public/index.html` to set default zoom to 18
- [x] 2.2 Implement `User-Centric Tactical HUD` camera tracking (replace `fitAllUsers` calls with `map.flyTo` or `map.setCenter`)
- [x] 2.3 Update `centerOnMe` to use zoom level 18
- [x] 2.4 Add "Sonar" green filter using CSS `backdrop-filter` in a full-screen overlay
- [x] 2.5 Implement "Sonar Pulse" radial gradient animation in CSS and add the corresponding HTML element

## 3. Battery-Optimized GPS

- [x] 3.1 Introduce `lastEmitTimestamp` ref/variable in the Vue setup
- [x] 3.2 Update `updateMyPosition` logic to implement the 10-second minimum interval throttle for WebSocket emissions
- [x] 3.3 Verify that the distance threshold (1 meter) still functions alongside the time throttle

## 4. Cleanup & Refactoring

- [x] 4.1 Remove `fitAllUsers` and `debouncedFit` functions from `src/public/index.html`
- [x] 4.2 Remove window `resize` event listener that triggers `fitAllUsers`
- [x] 4.3 Verify overall PWA functionality and tactical HUD aesthetics in both orientations

## 5. Visual Refinements

- [x] 5.1 Relocate sonar pulse to originate from the user's marker position
- [x] 5.2 Enhance sonar pulse with a sharper outer border and refined animation
