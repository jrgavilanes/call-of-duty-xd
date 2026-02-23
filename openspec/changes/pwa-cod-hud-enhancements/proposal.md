## Why

The current HUD lacks the immersion and functional focus required for a tactical real-time tracking experience. Auto-zooming to fit all users often results in a lost sense of scale, and the lack of horizontal orientation limits usability on mounted mobile devices. Additionally, GPS updates can be further optimized for battery life during extended outdoor use.

## What Changes

- **Landscape Mode Support**: Update the PWA configuration and CSS to support and look great in horizontal orientation.
- **User-Centric View (BREAKING)**: Replace the "fit all users" auto-zoom with a persistent "center on user" camera behavior. The map will follow the user's marker.
- **Tactical Zoom**: Increase the default and operational zoom levels to provide a high-detail, "Call of Duty" style HUD experience.
- **Battery-Optimized GPS Throttling**: Implement a 10-second minimum interval between GPS position broadcasts, even if the movement threshold is exceeded.
- **Retro Sonar Visuals**: Apply a high-visibility green filter and a periodic "sonar pulse" animation to the map interface, styled for legibility in outdoor lighting.

## Capabilities

### New Capabilities
- None (All changes are refinements of existing tactical capabilities).

### Modified Capabilities
- `map-interface`: Replace "Automatic Map View Fitting" with "User-Centric Tactical HUD". Add requirements for landscape support, increased zoom, and the green sonar pulse visual filter.
- `gps-tracking`: Update "Optimized Position Updates" to include a 10-second time-based throttle for server emissions.

## Impact

- **Frontend (`src/public/index.html`)**: CSS for the green sonar filter, sonar pulse animation, and orientation-specific layouts. MapLibre camera logic update.
- **Manifest/PWA (`src/public/manifest.json`)**: Update `orientation` and `display` settings if necessary to allow landscape.
- **Logic (`src/public/index.html` scripts)**: Update GPS emission logic to include the 10-second timer and switch from `fitBounds` to user-centric centering.
