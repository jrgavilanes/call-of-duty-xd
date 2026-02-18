## ADDED Requirements

### Requirement: WebSocket Server Management
The server SHALL maintain a registry of all connected users and their current states (ID, name, color, position).

#### Scenario: User connects
- **WHEN** a new client establishes a WebSocket connection
- **THEN** the server MUST assign a unique ID and broadcast the current state of all other users to the new client

### Requirement: State Broadcasting
The server SHALL broadcast state changes (joins, updates, leaves) to all other connected clients.

#### Scenario: User updates position
- **WHEN** a client sends a `position-update` message with new coordinates
- **THEN** the server MUST update the user's state in the registry and broadcast the update to all other clients

#### Scenario: User disconnects
- **WHEN** a client connection is closed
- **THEN** the server MUST remove the user from the registry and broadcast a `user-left` message to all remaining clients

### Requirement: Static File Serving
The server SHALL serve the `index.html` file and any associated public assets.

#### Scenario: Accessing root URL
- **WHEN** a user visits the root URL of the server
- **THEN** the server MUST respond with the content of `src/public/index.html`
