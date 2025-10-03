/**
 * File: WeatherPanel.js
 * Name: Marcella
 * Date: 10-03-25
 * Purpose: React component to display current weather data
 *          fetched from the backend NWS API route.
 */

import React, { useEffect, useState } from 'react';

const WeatherPanel = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('/api/weather?lat=40.7128&lon=-74.0060') // NYC default
      .then(res => res.json())
      .then(setWeather)
      .catch(console.error);
  }, []);

  if (!weather) return <div>Loading weather...</div>;

  return (
    <div className="weather-panel">
      <h2>{weather.name}</h2>
      <img src={weather.icon} alt={weather.shortForecast} />
      <p>{weather.temperature}°{weather.unit}</p>
      <p>{weather.shortForecast}</p>
    </div>
  );
};

export default WeatherPanel;

/**
 * Placeholder:
 *   - Add support for multi-day forecasts
 *   - Add "feels like" temp, humidity, wind speed, etc.
 *   - Accept city/location from props for dynamic positioning
 */
