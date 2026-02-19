## ADDED Requirements

### Requirement: Geolocation Permission Management
The application SHALL request and manage browser geolocation permissions to access the user's real-time position.

#### Scenario: Handle granted permission
- **WHEN** the user grants geolocation permission
- **THEN** the application MUST store this preference for the current session and attempt to retrieve the initial position

### Requirement: Optimized Position Updates for Mobile Devices
The application SHALL automatically update the user's position when running on a mobile device with granted geolocation permissions, using a movement threshold to optimize battery and data.

#### Scenario: Movement threshold exceeded
- **WHEN** the user is on a mobile device and moves more than ~1 meter (threshold 0.00001 degrees)
- **THEN** the application MUST fetch the current position and update the user's marker coordinates

#### Scenario: Movement below threshold
- **WHEN** the user moves less than the defined threshold
- **THEN** the application SHOULD NOT broadcast a new position to the server

### Requirement: GPS Acquisition Robustness
The application SHALL handle GPS acquisition timeouts gracefully.

#### Scenario: Acquisition timeout
- **WHEN** the GPS takes longer than 30 seconds to fix a position
- **THEN** the application MUST NOT mark the GPS as denied and SHOULD continue attempting to fix the position
