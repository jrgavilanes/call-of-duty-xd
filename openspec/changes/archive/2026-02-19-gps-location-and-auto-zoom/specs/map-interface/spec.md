## ADDED Requirements

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

## MODIFIED Requirements

### Requirement: "Center on Me" UI Control
The map UI SHALL include a button to immediately center the view on the user's current coordinates, positioned safely for mobile browser interfaces.

#### Scenario: Button positioning
- **WHEN** the UI renders
- **THEN** the "Center on Me" button MUST be positioned at the top-right with at least 50px padding to avoid overlap with mobile browser UI elements