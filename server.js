const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ─── API Route ────────────────────────────────────────────────
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hey everything is working' });
});

// ─── Serve Angular Build ──────────────────────────────────────
// Angular 17 'application' builder outputs to dist/frontend/browser/
const angularDist = path.join(__dirname, 'frontend', 'dist', 'frontend', 'browser');
app.use(express.static(angularDist));

// SPA fallback — send index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(angularDist, 'index.html'));
});

// ─── Start ────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
