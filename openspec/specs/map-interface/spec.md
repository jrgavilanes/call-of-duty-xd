## ADDED Requirements

### Requirement: Full-Screen Map Interface
The UI SHALL display a full-screen map centered in Paterna (Spain) using MapLibre GL JS.

#### Scenario: App initialization
- **WHEN** the page loads
- **THEN** a map MUST be rendered across the entire viewport, centered at [39.502, -0.443] (longitude, latitude for Paterna)

### Requirement: Identity Setup
The UI SHALL provide a modal or overlay for the user to set their display name and choose a marker color before participating.

#### Scenario: User identifies self
- **WHEN** the user provides a name, selects a color, and clicks "Join"
- **THEN** their marker MUST appear on the map and their state MUST be sent to the server

### Requirement: Real-time Marker Management
The UI SHALL display and synchronize markers for all connected users in real-time.

#### Scenario: Another user joins
- **WHEN** a `user-joined` message is received from the server
- **THEN** a new marker MUST be added to the map with that user's name and color

#### Scenario: Another user moves
- **WHEN** a `position-update` message is received from the server for an existing user
- **THEN** the corresponding marker on the map MUST smoothly transition to the new coordinates

#### Scenario: Another user leaves
- **WHEN** a `user-left` message is received from the server
- **THEN** the corresponding marker MUST be removed from the map

### Requirement: Draggable Movement Simulation
The user's own marker SHALL be draggable to simulate movement.

#### Scenario: Dragging local marker
- **WHEN** the user finishes dragging their marker to a new position
- **THEN** the new coordinates MUST be sent to the server via WebSocket
