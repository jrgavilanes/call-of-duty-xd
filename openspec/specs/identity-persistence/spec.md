## ADDED Requirements

### Requirement: Session Persistence
The application SHALL remember the user's callsign and color across page refreshes within the same browser.

#### Scenario: Return to application
- **WHEN** the user reloads the application and has previously joined a session
- **THEN** the application MUST automatically retrieve the callsign and color from local storage and attempt to auto-join the tactical network
