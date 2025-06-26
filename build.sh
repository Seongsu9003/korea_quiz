#!/bin/bash

# Frontend-only build script for Vercel deployment
echo "🚀 Building Korean Life Adaptation Quiz for Vercel..."

# Clean previous build
rm -rf dist/public

# Build the frontend
echo "📦 Building frontend with Vite..."
npx vite build

echo "✅ Build complete! Ready for Vercel deployment."
echo "📁 Output directory: dist/public"