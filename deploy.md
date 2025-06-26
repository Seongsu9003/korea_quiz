# Vercel Deployment Guide for Korean Life Quiz

## Quick Setup

1. **Connect to Vercel**
   - Go to https://vercel.com
   - Import this project from your Git repository

2. **Build Configuration**
   - Build Command: `vite build`
   - Output Directory: `dist/public`
   - Root Directory: `.` (leave empty)

3. **Environment Variables** (if needed later)
   - None required for frontend-only deployment

## Files Created

- `vercel.json` - Deployment configuration
- `build.sh` - Manual build script for testing

## How It Works

The quiz app runs entirely in the browser:
- Questions are stored in client-side data files
- No backend API calls needed
- All translations and personas are included in the build
- Perfect for static hosting on Vercel

## Deploy Steps

1. Push your code to GitHub
2. Connect the repository to Vercel
3. Vercel will automatically detect the Vite framework
4. Deploy with the configuration in `vercel.json`

Your Korean Life Adaptation Quiz will be available at: `your-project-name.vercel.app`