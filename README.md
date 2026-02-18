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
