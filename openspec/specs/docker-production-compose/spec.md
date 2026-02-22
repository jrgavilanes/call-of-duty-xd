## ADDED Requirements

### Requirement: Production Docker Compose Configuration
The system SHALL provide a production-ready `docker-compose.yml` file that pulls the pre-built image from the GitHub Container Registry.

#### Scenario: Pulling Images from Registry
- **WHEN** the user runs `docker compose up -d` in a production environment
- **THEN** the system SHALL pull `ghcr.io/jrgavilanes/call-of-duty-xd:latest` instead of building from source

### Requirement: Service Isolation and Persistence
The production `docker-compose.yml` SHALL ensure service isolation and include necessary volumes for persistent data.

#### Scenario: Persistent Storage in Production
- **WHEN** the production container is started
- **THEN** it SHALL mount local volumes to preserve state across updates
