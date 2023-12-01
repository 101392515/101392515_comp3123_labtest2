import React, { useState } from 'react';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import WeatherDetail from './components/WeatherDetail';
import { fetchCurrentWeather, fetchWeatherForecast } from './api'; 

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    try {
      const currentWeatherData = await fetchCurrentWeather(city);
      setCurrentWeather(currentWeatherData);

      const weatherForecastData = await fetchWeatherForecast(city);
      setWeatherForecast(weatherForecastData);
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error(err);
    }
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      {error && <div>{error}</div>}
      {currentWeather && <WeatherCard weather={currentWeather} />}
      {weatherForecast && <WeatherDetail details={weatherForecast} />}
    </div>
  );
};

export default App;
