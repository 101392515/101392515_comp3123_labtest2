import React from 'react';
import './WeatherCard.css'; 

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return <div className="weather-card">Loading...</div>; 
  }

  const { main, weather: weatherDetails, sys, name } = weather;
  const { temp, humidity, pressure } = main;
  const { country } = sys;
  const { main: weatherMain, description, icon } = weatherDetails[0];

  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  const dateStr = new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="weather-card">
      <div className="weather-location">{`${name}, ${country}`}</div>
      <div className="weather-date">{dateStr}</div>
      <div className="weather-temp">{`${Math.round(temp)}°C`}</div>
      <div className="weather-main">{weatherMain}</div>
      <img src={iconUrl} alt={description} className="weather-icon" />
      <div className="weather-description">{description}</div>
      <div className="weather-humidity">{`Humidity: ${humidity}%`}</div>
      <div className="weather-pressure">{`Pressure: ${pressure} hPa`}</div>
    </div>
  );
};

export default WeatherCard;
