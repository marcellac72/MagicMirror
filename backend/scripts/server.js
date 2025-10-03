/**
 * File: server.js
 * Name: Marcella
 * Date: 10-03-25
 * Purpose: Entry point for the Magic Mirror backend server. Registers API routes
 *          and serves frontend static files in production.
 */

const express = require('express');
const path = require('path');
const app = express();

// API Routes
const weatherRoute = require('../api/weather');
app.use('/api/weather', weatherRoute);


// Placeholder: Register other API routes below

// const newsRoute = require('../api/news');
// const eventsRoute = require('../api/events');
// const photosRoute = require('../api/photos');
// app.use('/api/news', newsRoute);
// app.use('/api/events', eventsRoute);
// app.use('/api/photos', photosRoute);


// Serve frontend build in production
app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Magic Mirror backend running at http://localhost:${PORT}`);
});
