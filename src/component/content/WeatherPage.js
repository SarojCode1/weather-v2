import React, { useState } from "react";
import axios from "axios";
import config from "../config.js";
import moment from "moment-timezone";
import { Link } from "react-router-dom";

const WeatherPage = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [currentDateTime, setCurrentDateTime] = useState("");
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    //  fix for the user input invalid city 
    const fetchWeatherData = () => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.api_key}&units=imperial`;

        axios
            .get(apiUrl)
            .then((response) => {
                setWeatherData(response.data);
                console.log(response.data);
                const timezoneInSeconds = response.data.timezone;
                const timeZoneInMinutes = timezoneInSeconds / 60;

                setCurrentDateTime(
                    moment().utcOffset(timeZoneInMinutes).format("HH:mm")
                );
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    };

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-black text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-10">Today's Weather</h1>
            <div className="flex flex-col items-center">
                <input type="text" value={city} onChange={handleInputChange} className="px-4 py-2 rounded-md mb-5 text-black" placeholder="Enter a city name" />
                <button onClick={fetchWeatherData} className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white">Get Weather</button>
                <Link to="/todo" className="mt-5 underline text-blue-500 hover:text-blue-700">Go to Todo List</Link>
            </div>
            {weatherData === null ? (
                <p className="mt-10 text-xl">No weather data available</p>
            ) : (
                <div className="Container mt-10">
                    <h2 className="text-2xl font-bold">{weatherData.name}</h2>
                    <p className="text-xl">Temperature: {weatherData.main.temp}°F</p>
                    <p className="text-xl">Humidity: {weatherData.main.humidity}%</p>
                    <p className="text-xl">Wind Speed: {weatherData.wind.speed} mph</p>
                    <p className="text-xl">Description: {weatherData.weather[0].description}</p>
                    {currentDateTime && <p className="text-xl">Current Time: {currentDateTime}</p>}
                </div>
            )}
        </div>
    );
};

export default WeatherPage;
