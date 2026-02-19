# Angular + Express — Hostinger Node.js

Minimal full-stack starter: Express API → Angular 17 frontend.

## Stack
- **Frontend:** Angular 17 (standalone components, SCSS)
- **Backend:** Express.js
- **Target:** Hostinger Node.js Web App

## How It Works
1. Angular loads and calls `GET /api/message`
2. Express returns `{ message: "Hey everything is working" }`
3. Angular displays the message on screen

## Local Development

**Terminal 1 — Backend:**
```bash
npm install
node server.js
```

**Terminal 2 — Frontend (with API proxy):**
```bash
cd frontend
npm install
npm start
```
Angular dev server proxies `/api/*` → `http://localhost:3000`

## Hostinger Deployment
1. Push this repo to GitHub
2. Hostinger → Websites → Add website → **Node.js Web App**
3. Connect your GitHub repository
4. Hostinger runs `npm install` (triggers Angular build via `postinstall`) then `npm start`
