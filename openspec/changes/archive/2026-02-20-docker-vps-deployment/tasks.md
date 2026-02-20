## 1. Docker Infrastructure

- [x] 1.1 Create a multi-stage `Dockerfile` using `oven/bun:1-alpine` as the base image.
- [x] 1.2 Configure the `Dockerfile` to run as a non-root `bun` user for production.
- [x] 1.3 Create a `docker-compose.yml` file to orchestrate the application container.
- [x] 1.4 Add health checks to the application service in `docker-compose.yml`.

## 2. CI/CD and Deployment Script

- [x] 2.1 Create a `deploy.sh` script to automate building and tagging Docker images.
- [x] 2.2 Implement image versioning (e.g., semantic version or git commit hash) and `latest` tagging in `deploy.sh`.
- [x] 2.3 Add logic to `deploy.sh` to push images to GitHub Container Registry (`ghcr.io`).
- [x] 2.4 Add error handling and build validation to the deployment script.
- [x] 2.5 Ensure the script is executable (`chmod +x deploy.sh`).

## 3. Documentation and VPS Configuration

- [x] 3.1 Create a `Caddyfile` template for the VPS reverse proxy with `example.com` as a placeholder.
- [x] 3.2 Update the `README.md` with a "Deployment" section.
- [x] 3.3 Document the VPS setup process: Docker installation, Caddy setup, and SSL automation.
- [x] 3.4 Provide instructions on how to configure GitHub PAT for GHCR and use the `deploy.sh` script.

## 4. Verification and Final Cleanup

- [x] 4.1 Locally build the Docker image and verify its size and non-root user execution.
- [x] 4.2 Test the `deploy.sh` script (without pushing, if possible, or using a test repository).
- [x] 4.3 Verify the `Caddyfile` syntax and WebSocket forwarding logic.
- [x] 4.4 Final review of `README.md` for clarity and completeness.
