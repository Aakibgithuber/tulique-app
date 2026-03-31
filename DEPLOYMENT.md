# Deployment Guide

This guide explains how to deploy the application locally and provides a basic outline for production deployment.

## Local Development

1. **Install dependencies:**
   ```sh
   pnpm install
   ```
2. **Start the development server:**
   ```sh
   pnpm dev
   ```
3. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Production Deployment (Basic)

1. **Build the application:**
   ```sh
   pnpm build
   ```
2. **Start the production server:**
   ```sh
   pnpm start
   ```

You can deploy the built app to any Node.js-compatible hosting (e.g., Vercel, Netlify, or your own server).

---

For advanced deployment (Docker, CI/CD, cloud), refer to your hosting provider's documentation or request further guidance.
