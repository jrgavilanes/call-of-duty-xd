## Why

The current `docker-compose.yml` is configured for development, building the Docker image from local source code. However, in production environments (like a VPS), it is more efficient and standard to pull pre-built images from a container registry. Renaming the current file to `docker-compose-dev.yml` and creating a new `docker-compose.yml` for production will clarify workflows and simplify deployment.

## What Changes

- **Renaming**: Rename `docker-compose.yml` to `docker-compose-dev.yml` to reflect its development-focused nature (building from source).
- **New Production Config**: Create a new `docker-compose.yml` that pulls the image from the GitHub Container Registry (`ghcr.io/jrgavilanes/call-of-duty-xd:latest`).
- **Multi-platform Support**: Update the deployment process to build images for both `linux/amd64` (for VPS) and `linux/arm64` (for Mac/ARM servers).
- **Documentation Update**: Update `README.md` to reflect the change in Docker Compose filenames and provide instructions for both development and production usage.
- **Workflow Clarity**: Standardize the use of `docker-compose-dev.yml` for local development and `docker-compose.yml` for deployment.

## Capabilities

### New Capabilities
- `docker-production-compose`: A production-ready Docker Compose configuration that pulls images from the registry.

### Modified Capabilities
- `docker-deployment`: Update requirements to distinguish between development (local build) and production (remote image) deployment flows.

## Impact

- **Local Development**: Developers must now use `docker compose -f docker-compose-dev.yml up` for local development.
- **Deployment**: The `deploy.sh` script currently builds and pushes images; it may need a slight update to clarify that it doesn't use the production `docker-compose.yml` for building.
- **Documentation**: `README.md` needs to be updated to avoid confusion.
