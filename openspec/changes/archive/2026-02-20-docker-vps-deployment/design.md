## Context

The Call of Duty XD application is currently developed locally using Bun. To deploy it to a VPS, we need a standardized, reproducible environment that is secure and efficient.

## Goals / Non-Goals

**Goals:**
- Create a multi-stage Dockerfile to minimize image size and maximize build speed.
- Use a non-root user for improved container security.
- Provide a `docker-compose.yml` for easy orchestration on a VPS.
- Document Caddy configuration for SSL and WebSocket support.

**Non-Goals:**
- Setting up a full CI/CD pipeline (e.g., GitHub Actions) in this change.
- Multi-container orchestration (e.g., database, redis) beyond the app itself for now.

## Decisions

### 1. Multi-stage Docker Build
- **Decision:** Use `oven/bun:1-alpine` (or slim) as the base image for both build and run stages.
- **Rationale:** Alpine-based images are significantly smaller than the full Debian-based ones. A multi-stage build ensures that development dependencies and build artifacts (like `node_modules` during install) are not included in the final production image.
- **Alternatives Considered:** Single-stage build (simpler but larger image), Debian-based images (better compatibility but larger).

### 2. Security: Non-Root User
- **Decision:** Run the application as the `bun` user (UID 1000) included in the base image.
- **Rationale:** Following the principle of least privilege reduces the attack surface if the application is compromised.

### 3. VPS Proxy with Caddy
- **Decision:** Use Caddy as the reverse proxy on the host machine.
- **Rationale:** Caddy provides automatic SSL (Let's Encrypt) and handles WebSockets transparently with minimal configuration (`reverse_proxy`).
- **Configuration (Example):**
  ```caddy
  example.com {
      reverse_proxy localhost:3000
  }
  ```

### 4. Efficient Build Cache
- **Decision:** Copy `package.json` and `bun.lock` separately before the rest of the source code.
- **Rationale:** This leverages Docker's layer caching to avoid re-installing dependencies unless the lockfile changes.

### 5. Scripted Deployment to GHCR
- **Decision:** Create a `deploy.sh` script that uses `docker buildx` for multi-platform support (optional) and tags images with the current version and `latest`.
- **Rationale:** Automating the build-tag-push cycle reduces manual errors and ensures consistent versioning in the GitHub Container Registry.
- **Integration:** The script will require a GitHub PAT (Personal Access Token) for authentication.

## Risks / Trade-offs

- **[Risk]** Alpine compatibility → **[Mitigation]** Bun's native binaries are generally well-supported on Alpine, but we will verify during the validation phase.
- **[Trade-off]** Smaller image vs. faster build → **[Mitigation]** Multi-stage builds might take slightly longer than a simple copy, but the runtime performance and security benefits outweigh the build-time cost.
- **[Risk]** Secret leakage (GitHub PAT) → **[Mitigation]** Explicitly document that secrets should be passed via environment variables or interactive login, never hardcoded in scripts.
