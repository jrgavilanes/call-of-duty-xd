## ADDED Requirements

### Requirement: Multi-stage Docker Build
The system SHALL provide a multi-stage Dockerfile that separates the build environment from the final runtime image.

#### Scenario: Efficient Image Size
- **WHEN** the Docker image is built
- **THEN** the final image size SHALL be minimized by excluding development dependencies and source code not needed for production

### Requirement: Non-Root User Security
The application SHALL run as a non-privileged user within the Docker container.

#### Scenario: Least Privilege Execution
- **WHEN** the container is started
- **THEN** the process SHALL be owned by the `bun` user (UID 1000)

### Requirement: Persistent Data Handling
The system SHALL use Docker volumes for any data that needs to persist across container restarts.

#### Scenario: Data Persistence
- **WHEN** the application saves state to a volume
- **THEN** the state SHALL remain available after the container is recreated
