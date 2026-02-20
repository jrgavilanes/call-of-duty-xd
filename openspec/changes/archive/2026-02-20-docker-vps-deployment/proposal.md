## Why

Provide a production-ready deployment strategy for the Call of Duty XD app on a VPS. This ensures the app is easy to deploy, secure, and performant with a small footprint.

## What Changes

- Create a multi-stage `Dockerfile` using Bun for an efficient and secure runtime image.
- Create a `docker-compose.yml` to manage the application and potential future services.
- Create a `deploy.sh` script to build, version, and push the image to GitHub Container Registry (GHCR).
- Update `README.md` with instructions for VPS setup, including Caddy as a reverse proxy with WebSocket support and how to use the deployment script.

## Capabilities

### New Capabilities
- `docker-deployment`: Infrastructure as code for building and running the application in a containerized environment.
- `vps-caddy-proxy`: Documentation and configuration guidance for external proxying with Caddy, including SSL and WebSocket support.
- `docker-github-registry`: Scripted workflow for CI/CD, including image versioning and pushing to GHCR.

### Modified Capabilities
<!-- No requirement changes to existing features -->

## Impact

Adds new configuration files for deployment. No changes to application logic are expected.
