## ADDED Requirements

### Requirement: Caddy Reverse Proxy Configuration
The system SHALL provide a Caddyfile template for configuring a reverse proxy to the application.

#### Scenario: SSL Termination
- **WHEN** Caddy is configured with a domain
- **THEN** it SHALL automatically provision and manage SSL certificates

### Requirement: WebSocket Support
The reverse proxy configuration SHALL support WebSocket connections transparently.

#### Scenario: Real-time Communication
- **WHEN** a client initiates a WebSocket connection through Caddy
- **THEN** the connection SHALL be upgraded and forwarded to the application without manual configuration

### Requirement: Deployment Documentation
The `README.md` SHALL be updated with clear instructions on how to set up the VPS with Docker and Caddy, and how to use the deployment script.

#### Scenario: Guided VPS Setup
- **WHEN** a user follows the deployment instructions
- **THEN** they SHALL be able to host the application on a domain with SSL and WebSockets enabled, and understand how to deploy new versions using the script
