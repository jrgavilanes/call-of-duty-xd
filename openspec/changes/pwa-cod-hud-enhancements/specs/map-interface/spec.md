## ADDED Requirements

### Requirement: User-Centric Tactical HUD
The map camera SHALL persistently follow the user's current coordinates, ensuring the user is always at the center of the tactical display.

#### Scenario: Real-time camera tracking
- **WHEN** the user's position is updated via GPS or manual marker movement
- **THEN** the map MUST smoothly transition to center the view on the new coordinates

### Requirement: Tactical Visual Overlays
The UI SHALL apply a high-visibility green "Sonar" filter and a periodic "Sonar Pulse" animation to enhance the tactical HUD experience.

#### Scenario: Sonar filter activation
- **WHEN** the HUD is active
- **THEN** a green backdrop-filter MUST be applied to the map interface to ensure legibility in high-light conditions

#### Scenario: Sonar pulse animation
- **WHEN** the map is rendered
- **THEN** a radial green pulse animation MUST originate from the center of the screen every 4 seconds

### Requirement: Landscape Orientation Support
The UI SHALL adapt its layout to remain fully functional and visually balanced in horizontal (landscape) orientation.

#### Scenario: Layout adaptation
- **WHEN** the device orientation changes to landscape
- **THEN** the HUD overlays and control buttons MUST reposition to avoid overlapping with map elements and mobile browser UI

## MODIFIED Requirements

### Requirement: Full-Screen Map Interface
The UI SHALL display a full-screen map using MapLibre GL JS, initialized at a high-detail tactical zoom level (18).

#### Scenario: App initialization
- **WHEN** the page loads
- **THEN** a map MUST be rendered across the entire viewport, centered on the user's current or default location with a default zoom level of 18

### Requirement: "Center on Me" UI Control
The map UI SHALL include a button to immediately center the view on the user's current coordinates with a high-detail zoom level (18).

#### Scenario: Button positioning
- **WHEN** the UI renders
- **THEN** the "Center on Me" button MUST be positioned at the top-right with at least 50px padding to avoid overlap with mobile browser UI elements

#### Scenario: Triggering center-on-me
- **WHEN** the "Center on Me" button is clicked
- **THEN** the map camera MUST fly to the user's coordinates and set the zoom level to 18

### Requirement: PWA Integration
The application SHALL be installable as a Progressive Web App (PWA) supporting all screen orientations to provide a flexible tactical experience.

#### Scenario: Add to home screen
- **WHEN** the user chooses to "Add to home screen" or "Install"
- **THEN** the application MUST open in standalone mode and support both portrait and landscape orientations

## REMOVED Requirements

### Requirement: Automatic Map View Fitting (Auto-Zoom)
**Reason**: Replaced by user-centric persistent tracking to focus on the operator's immediate surroundings.
**Migration**: Use the "User-Centric Tactical HUD" capability for map camera management.
