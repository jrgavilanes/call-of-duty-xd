#!/bin/bash

# Exit on any error
set -e

# Configuration
IMAGE_NAME="ghcr.io/jrgavilanes/call-of-duty-xd"
VERSION=$(git rev-parse --short HEAD)
TAG_VERSION="${IMAGE_NAME}:${VERSION}"
TAG_LATEST="${IMAGE_NAME}:latest"

echo "🚀 Starting deployment process for version: ${VERSION}..."

# 1. Build the image
echo "🔨 Building Docker image..."
docker build -t "${TAG_VERSION}" .

# 2. Tag as latest
echo "🏷️ Tagging image as latest..."
docker tag "${TAG_VERSION}" "${TAG_LATEST}"

# 3. Push to GHCR
# Note: Ensure you are logged in via 'docker login ghcr.io'
echo "📤 Pushing images to GitHub Container Registry..."
docker push "${TAG_VERSION}"
docker push "${TAG_LATEST}"

echo "✅ Deployment successful! Images pushed:"
echo "   - ${TAG_VERSION}"
echo "   - ${TAG_LATEST}"
