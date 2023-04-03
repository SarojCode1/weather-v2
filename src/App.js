
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Form from "./component/form";
// import dotenv from "dotenv";
// import * as dotenv from "dotenv";
// dotenv.config();
// const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeatherData = () => {
    const apiKey = "7317f1f95397b4722b00199be2e48552";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  return (
    <div>
      <h1> Today's Weather</h1>
      <input type="text" value={city} onChange={handleInputChange} />
      <button onClick={fetchWeatherData}>Get Weather</button>
      {weatherData === null ? (
        <p>No weather data available</p>
      ) : (
        <div className="Container">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°F</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} mph</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Current Time: {currentTime}</p>
        </div>
      )}
    </div>
  );
};

export default App;
