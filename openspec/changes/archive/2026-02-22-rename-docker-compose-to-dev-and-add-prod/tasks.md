## 1. Docker Compose Refactoring

- [x] 1.1 Rename existing `docker-compose.yml` to `docker-compose-dev.yml`
- [x] 1.2 Create new production `docker-compose.yml` pulling from `ghcr.io/jrgavilanes/call-of-duty-xd:latest`
- [x] 1.3 Verify both files have consistent service and container names

## 2. Documentation and Scripts

- [x] 2.1 Update `README.md` with "Development" instructions using `docker compose -f docker-compose-dev.yml up`
- [x] 2.2 Update `README.md` with "Production" instructions using `docker compose up -d`
- [x] 2.3 Update `package.json` with a new script `dev:docker` to simplify running the development compose file
- [x] 2.4 Update `deploy.sh` to build multi-platform images (linux/amd64, linux/arm64) using `docker buildx`

## 3. Verification

- [x] 3.1 Validate `docker-compose-dev.yml` builds the image correctly from source
- [x] 3.2 Validate `docker-compose.yml` (production) successfully pulls and starts the registry image
