## ADDED Requirements

### Requirement: Development Docker Compose Configuration
The system SHALL provide a `docker-compose-dev.yml` file for local development that builds the Docker image from source code.

#### Scenario: Building from Source locally
- **WHEN** the developer runs `docker compose -f docker-compose-dev.yml up`
- **THEN** the system SHALL build the image from local source using the `Dockerfile`

### Requirement: Multi-Platform Builds for Registry
The system SHALL support building Docker images for both `linux/amd64` and `linux/arm64` architectures to ensure compatibility across different deployment environments.

#### Scenario: Building for Multiple Platforms
- **WHEN** the deployment script is executed
- **THEN** it SHALL use `docker buildx` to build and push images for `linux/amd64` and `linux/arm64` simultaneously

## RENAMED Requirements
- **FROM**: `docker-compose.yml` (Development)
- **TO**: `docker-compose-dev.yml`
