import axios from 'axios';

const API_KEY = '68b3ebcbfbfe4d58981323774652726e'; // actual API key

// Function for current weather
export const fetchCurrentWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    
    console.error("Error fetching current weather: ", error);
    throw error;
  }
};

// Function for forecast
export const fetchWeatherForecast = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
   
    console.error("Error fetching weather forecast: ", error);
    throw error;
  }
};
