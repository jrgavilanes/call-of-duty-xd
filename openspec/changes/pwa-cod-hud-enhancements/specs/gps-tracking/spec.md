## MODIFIED Requirements

### Requirement: Optimized Position Updates for Mobile Devices
The application SHALL automatically update the user's position when running on a mobile device with granted geolocation permissions, using a hybrid threshold (distance and time) to optimize battery life.

#### Scenario: Movement threshold exceeded
- **WHEN** the user is on a mobile device, moves more than ~1 meter (threshold 0.00001 degrees), AND at least 10 seconds have elapsed since the last update
- **THEN** the application MUST fetch the current position and update the user's marker coordinates

#### Scenario: Movement within time window
- **WHEN** the user moves more than the distance threshold but less than 10 seconds have elapsed
- **THEN** the application SHOULD NOT broadcast a new position to the server until the time window expires

#### Scenario: Movement below threshold
- **WHEN** the user moves less than the distance threshold
- **THEN** the application SHOULD NOT broadcast a new position to the server
