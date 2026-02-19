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

### Requirement: Automatic Map View Fitting (Auto-Zoom)
The map SHALL automatically adjust its center and zoom level to ensure all active users are visible within the current viewport.

#### Scenario: User joins or moves
- **WHEN** any user's position changes or a new user joins
- **THEN** the map MUST calculate a bounding box encompassing all markers and transition the camera to fit this box with appropriate padding

### Requirement: "Center on Me" UI Control
The map UI SHALL include a button to immediately center the view on the user's current coordinates, positioned safely for mobile browser interfaces.

#### Scenario: Button positioning
- **WHEN** the UI renders
- **THEN** the "Center on Me" button MUST be positioned at the top-right with at least 50px padding to avoid overlap with mobile browser UI elements

### Requirement: Tactical Logout Control
The map UI SHALL include a logout button to terminate the session and clear identity.

#### Scenario: User clicks logout
- **WHEN** the logout button is clicked
- **THEN** the application MUST clear stored identity from local storage, close the WebSocket connection, and return to the identity setup screen

### Requirement: PWA Integration
The application SHALL be installable as a Progressive Web App (PWA) to provide an app-like experience.

#### Scenario: Add to home screen
- **WHEN** the user chooses to "Add to home screen" or "Install"
- **THEN** the application MUST open in standalone mode (without browser address bar) and display the configured tactical icon

### Requirement: Draggable Movement Simulation
The user's own marker SHALL be draggable to simulate movement, but only on desktop/large screens.

#### Scenario: Dragging on large screen
- **WHEN** the user is on a desktop/large screen device and finishes dragging their marker
- **THEN** the new coordinates MUST be sent to the server via WebSocket

#### Scenario: Dragging disabled on mobile
- **WHEN** the user is on a mobile device
- **THEN** the user's marker MUST NOT be draggable