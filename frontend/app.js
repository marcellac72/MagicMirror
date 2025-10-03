/**
 * File: api.js
 * Name: Marcella
 * Date: 10-03-25
 * Purpose: Helper functions to interact with backend API endpoints.
 */

export async function getWeather(lat = '40.7128', lon = '-74.0060') {
  const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
  if (!response.ok) throw new Error('Failed to fetch weather');
  return await response.json();
}

/**
 * Placeholder: Add more API functions here
 *   - getNews()
 *   - getEvents()
 *   - getPhotos()
 */
