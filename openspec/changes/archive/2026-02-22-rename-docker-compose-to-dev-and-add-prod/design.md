## Context

The project currently uses a single `docker-compose.yml` that builds the application from source code. This is ideal for development but inefficient for production where pulling a pre-built image is preferred. We need to distinguish between these two environments by separating their configurations.

## Goals / Non-Goals

**Goals:**
- Differentiate between development (build from source) and production (pull from registry) Docker configurations.
- Minimize friction for developers while providing a robust production setup.
- Update documentation to reflect the new workflow.

**Non-Goals:**
- Changing the existing `Dockerfile` or build process.
- Modifying the CI/CD pipeline beyond ensuring compatibility with the new file structure.

## Decisions

### 1. File Naming Strategy
- **Decision**: Rename `docker-compose.yml` to `docker-compose-dev.yml` and create a new `docker-compose.yml` for production.
- **Rationale**: In most production environments and CI tools, `docker-compose.yml` is the default file looked for. By making the production file the default, we reduce the need for explicit flags during deployment. Development is a conscious action where using a `-f` flag or a dedicated command is acceptable.

### 2. Production Configuration Content
- **Decision**: The new `docker-compose.yml` will use `image: ghcr.io/jrgavilanes/call-of-duty-xd:latest` and remove the `build` context.
- **Rationale**: This ensures that production environments always use the verified, registry-hosted image.

### 3. Volume and Network Persistence
- **Decision**: Keep the service name (`app`) and container name (`cod-hud-server`) consistent across both files.
- **Rationale**: Consistency simplifies troubleshooting and ensures that any existing external scripts or monitoring tools continue to work.

### 4. Multi-platform Builds
- **Decision**: Update `deploy.sh` to use `docker buildx build --platform linux/amd64,linux/arm64 --push`.
- **Rationale**: This allows a single build process to target both local development (Mac/ARM64) and production VPS (Linux/AMD64) environments. Using `--push` with buildx is the standard way to handle multi-platform builds in registries.

## Risks / Trade-offs

- **[Risk] Developer Confusion**: Developers might run `docker compose up` and accidentally pull the production image instead of building their local changes.
  - **Mitigation**: Update `README.md` with clear "Development" and "Production" sections and consider adding a simple `npm script` (e.g., `npm run dev:docker`) to wrap the development command.
- **[Trade-off] Multi-file Management**: Any change to environment variables or ports must now be synchronized across two files.
  - **Mitigation**: Use an `.env` file for shared configuration to minimize duplication.
