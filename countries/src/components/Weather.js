import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const weatherApiKey = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState({});

  const hook = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${capital}`)
      .then((response) => {
        const currentWeather = response.data.current;
        if (currentWeather) {
          const temperatureInCelsius = currentWeather.temperature;
          const { weather_icons, wind_speed, wind_dir } = currentWeather;
          setWeather({ temperature: temperatureInCelsius, weather_icons, wind_speed, wind_dir });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(hook, [capital, weatherApiKey]);

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p>
        <strong>temperature:</strong> {weather.temperature} Celsius
      </p>
      <img src={weather.weather_icons} alt="weather icon" />
      <p>
        <strong>wind:</strong> {weather.wind_speed} km/h direction{" "}
        {weather.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
