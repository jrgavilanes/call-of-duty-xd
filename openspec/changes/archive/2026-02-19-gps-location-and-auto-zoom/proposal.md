## Why

Enhance user experience and realism by integrating real-time GPS tracking on mobile devices while maintaining manual position control for desktop users. This ensures the map view remains relevant and responsive to the user's actual location and the distribution of all participants.

## What Changes

- **GPS Integration**: Automatically request geolocation permission upon application load if not already granted.
- **Session Management**: Persistently track and use the user's current GPS position if permission is granted for the current session.
- **Mobile-Specific Behavior**: 
    - Disable manual marker dragging.
    - Automatically update position every 5 seconds.
- **Desktop/Large Screen Behavior**: Retain manual marker dragging for position simulation.
- **Auto-Zoom & Fitting**: Implement logic to adjust the map's zoom level and center to ensure all active users are visible within the viewport.
- **Responsive Layout**: Recalculate view bounds and UI elements upon screen orientation changes (portrait/landscape).
- **Navigation Controls**: Add a "Center on Me" button to quickly reset the view to the user's current location.

## Capabilities

### New Capabilities
- `gps-tracking`: Handles browser Geolocation API permissions, fetching current position, and managing periodic updates based on device type and user session.
- `identity-persistence`: Manages local storage of user callsign and color to enable automatic session restoration across refreshes.

### Modified Capabilities
- `map-interface`: Update requirements to include auto-zoom logic, orientation change handling, device-specific dragging permissions, and the new "Center on Me" UI control.

## Impact

- **Frontend**: Significant updates to the MapLibre GL JS implementation and UI layout logic.
- **UX**: Changes in how users interact with their own marker based on their device type.
- **Permissions**: Introduces dependency on browser geolocation permissions.
