import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const handlecitychange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"fcf4a3f451fb11481ceb43c27460159b"}`
      );
      setWeather(response);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };
  const handlegetweather = () => {
    fetchWeather();
  };

  return (
    <>
      <div className="weather-container">
        <div className="weather-info">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handlecitychange}
          />
          <button onClick={handlegetweather}>Get Weather</button>

          {weather && (
            <div className="weather-details">
              <h2>{weather.data.name}</h2>
         
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
