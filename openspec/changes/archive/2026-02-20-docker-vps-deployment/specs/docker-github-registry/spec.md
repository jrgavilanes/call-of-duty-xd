## ADDED Requirements

### Requirement: Image Tagging and Versioning
The system SHALL provide a mechanism to tag Docker images with a semantic version and the `latest` tag.

#### Scenario: Versioned Image Build
- **WHEN** the deployment script is executed with a version argument
- **THEN** the Docker image SHALL be tagged with that version and pushed to the registry

### Requirement: GitHub Container Registry Integration
The deployment script SHALL facilitate pushing images to `ghcr.io`.

#### Scenario: Push to GHCR
- **WHEN** the user is authenticated with a GitHub PAT
- **THEN** the script SHALL push the built image to the user's repository in GHCR

### Requirement: Deployment Script Logic
The `deploy.sh` script SHALL include error handling and verify that the build was successful before attempting to push.

#### Scenario: Failed Build Prevention
- **WHEN** a Docker build fails
- **THEN** the script SHALL exit with an error and NOT attempt to push any images
