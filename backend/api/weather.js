/**
 * File: weather.js
 * Name: Marcella
 * Date: 10-03-25
 * Purpose: Handles weather data requests from the National Weather Service (NWS) API.
 *          Returns current forecast data for a given latitude and longitude.
 */


const express = require('express');
const axios = require('axios');
const router = express.Router();

// Placeholder: Move this user-agent to a shared config file if reused by other APIs
const NWS_HEADERS = {
  'User-Agent': 'MagicMirrorProject/1.0 (contact@example.com)' // Replace with your email or domain
};

// Function to get the NWS forecast URL for a given lat/lon
async function getForecastUrl(lat, lon) {
  const url = `https://api.weather.gov/points/${lat},${lon}`;
  const response = await axios.get(url, { headers: NWS_HEADERS });
  return response.data.properties.forecast;
}

// Route: /api/weather?lat=...&lon=...
router.get('/', async (req, res) => {
  const { lat = '40.7128', lon = '-74.0060' } = req.query; // Default to New York City

  try {
    const forecastUrl = await getForecastUrl(lat, lon);
    const forecastResponse = await axios.get(forecastUrl, { headers: NWS_HEADERS });

    const period = forecastResponse.data.properties.periods[0]; // Get current period
    res.json({
      name: period.name,
      temperature: period.temperature,
      unit: period.temperatureUnit,
      shortForecast: period.shortForecast,
      icon: period.icon
    });
  } catch (err) {
    console.error('NWS API error:', err.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

/**
 * Placeholder: Add more routes here for additional weather-related data:
 *    - /forecast/hourly
 *    - /alerts
 *    - /weather/extended
 *    - Add caching/memoization for performance
 */

module.exports = router;
