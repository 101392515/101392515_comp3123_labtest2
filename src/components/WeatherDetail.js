import React from 'react';
import './WeatherDetail.css'; 

const WeatherDetail = ({ details }) => {
  
  if (!details || !details.main) {
    return <div>loading...</div>; 
  }

  const { main: { temp, temp_min, temp_max, humidity, pressure }, wind } = details;

  return (
    <div className="weather-detail-container">
      <div className="weather-detail-item">
        <span className="weather-detail-title">Temperature:</span>
        <span className="weather-detail-value">{temp}°C</span>
      </div>
      <div className="weather-detail-item">
        <span className="weather-detail-title">Min Temp:</span>
        <span className="weather-detail-value">{temp_min}°C</span>
      </div>
      <div className="weather-detail-item">
        <span className="weather-detail-title">Max Temp:</span>
        <span className="weather-detail-value">{temp_max}°C</span>
      </div>
      <div className="weather-detail-item">
        <span className="weather-detail-title">Humidity:</span>
        <span className="weather-detail-value">{humidity}%</span>
      </div>
      <div className="weather-detail-item">
        <span className="weather-detail-title">Pressure:</span>
        <span className="weather-detail-value">{pressure} hPa</span>
      </div>
      <div className="weather-detail-item">
        <span className="weather-detail-title">Wind:</span>
        <span className="weather-detail-value">{wind.speed} m/s</span>
      </div>
    </div>
  );
};

export default WeatherDetail;
