#!/bin/bash

# Exit on any error
set -e

# Configuration
IMAGE_NAME="ghcr.io/jrgavilanes/call-of-duty-xd"
VERSION=$(git rev-parse --short HEAD)
TAG_VERSION="${IMAGE_NAME}:${VERSION}"
TAG_LATEST="${IMAGE_NAME}:latest"

echo "🚀 Starting deployment process for version: ${VERSION}..."

# 1. Build and push multi-platform images
# Note: This requires a docker buildx builder that supports multiple platforms
# If you haven't created one: docker buildx create --use
echo "🔨 Building and pushing multi-platform Docker images..."
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t "${TAG_VERSION}" \
  -t "${TAG_LATEST}" \
  --push \
  .

echo "✅ Deployment successful! Images built and pushed for linux/amd64,linux/arm64:"
echo "   - ${TAG_VERSION}"
echo "   - ${TAG_LATEST}"
