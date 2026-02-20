# 🛰️ Real-Time HUD (Heads-Up Display)

A mobile-first, real-time tactical synchronization system built with **Bun.js**, **WebSockets**, and **MapLibre GL JS**. Track your teammates in real-time with a high-performance HUD interface inspired by modern tactical games.

![Status](https://img.shields.io/badge/Status-MVP-green)
![Tech](https://img.shields.io/badge/Tech-Bun%20%7C%20Vue3%20%7C%20Tailwind%20%7C%20MapLibre-blue)

## ✨ Features

- **📍 Real-Time Tracking**: Instant position synchronization across all connected clients.
- **📱 Mobile-First Design**: Optimized for touch interactions and full-screen mobile experience.
- **🗺️ High-Detail Mapping**: Powered by MapLibre GL JS with OpenFreeMap Liberty style (includes buildings and streets).
- **🎨 Custom Identity**: Choose your callsign and HUD color to stand out on the map.
- **🕹️ Movement Simulation**: Draggable markers for easy testing and position updates.
- **⚡ Performance**: Built on Bun's native high-speed WebSockets for ultra-low latency.

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.

```bash
curl -fsSL https://bun.com/install | bash
```

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mapas
   ```

2. Install dependencies (if any are added in the future, currently uses CDNs for frontend):
   ```bash
   bun install
   ```

### Running the Server

Start the HUD server using Bun:

```bash
bun run src/index.ts
```

The server will be available at `http://localhost:3001`.

## 🚢 Deployment

### 📦 Docker (Production)

To run the application in production using Docker:

1. **Build the image**:
   ```bash
   docker compose build
   ```

2. **Run the container**:
   ```bash
   docker compose up -d
   ```

The application will be accessible at `http://localhost:3001`.

### 🏗️ CI/CD to GitHub Container Registry (GHCR)

The project includes a `deploy.sh` script to automate building and pushing images to GHCR.

1. **Authenticate with GitHub**:
   Create a [Personal Access Token (classic)](https://github.com/settings/tokens) with `write:packages` and `read:packages` scopes.
   
   ```bash
   echo $YOUR_GITHUB_TOKEN | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin
   ```

2. **Deploy a new version**:
   The script will automatically use the short git commit hash as the version tag.
   
   ```bash
   ./deploy.sh
   ```

### 🌐 VPS Setup (Caddy)

For hosting on a VPS with automatic SSL and WebSocket support, we recommend using **Caddy**.

1. **Install Caddy** on your VPS.
2. **Configure the Caddyfile**:
   Update the provided `Caddyfile` with your domain:
   ```caddy
   example.com {
       reverse_proxy localhost:3001
   }
   ```
3. **Restart Caddy**:
   ```bash
   sudo systemctl reload caddy
   ```

Caddy will automatically handle Let's Encrypt SSL certificates and forward WebSockets to the Bun server.

## 🛠️ Tech Stack

- **Backend**: [Bun.js](https://bun.sh/) (Server & WebSockets)
- **Frontend**: [Vue 3](https://vuejs.org/) (CDN), [Tailwind CSS](https://tailwindcss.com/) (CDN)
- **Maps**: [MapLibre GL JS](https://maplibre.org/)
- **Map Style**: [OpenFreeMap](https://openfreemap.org/)

## 📖 Usage

1. Open the application in your browser.
2. Enter your **Callsign** and select your preferred **HUD Color**.
3. Click **"Initialize Link"** to join the map.
4. Drag your marker (The one labeled **"YOU"**) to update your position.
5. Open the same URL in another tab or device to see the synchronization in action.

## 🗺️ Initial Focus
The map is currently centered in **Paterna, Spain**, optimized for local testing.

---
Developed as a high-performance prototype for real-time geolocation services.
