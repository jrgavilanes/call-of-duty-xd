# Stage 1: Build
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Copy lockfile and package.json for caching
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# In this specific app, we are serving files from src/public and src/index.ts
# Bun doesn't strictly need a 'build' step for this simple server, 
# but we'll prepare the workspace.

# Stage 2: Production
FROM oven/bun:1-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy only necessary files from builder
# We need the source and node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Run as non-root user 'bun' (UID 1000)
USER bun

# Expose the port the app runs on
EXPOSE 3001

# Start the application
CMD ["bun", "run", "src/index.ts"]
