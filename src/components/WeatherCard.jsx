import React from "react";
import { useState } from "react";
import "../style/WeatherCard.css";

const WeatherCard = ({ weather, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const changeTemperature = () => setIsCelsius(!isCelsius);

  return (
    <article className="weather__card">
      <section className="weather__header">
        <h1>Weather App</h1>
        <h2>{`${weather?.name}, ${weather?.sys.country}`}</h2>
      </section>
      <section className="weather__info">
        <div className="weather__icon">
          <img
            src={
              weather
                ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
                : ""
            }
            alt=""
          />
          <h2>
            {isCelsius
              ? `${temperature?.celsius} °C`
              : `${temperature?.farenhait} °F`}
          </h2>
        </div>
        <div className="weather__texts">
          <p>{weather?.weather[0].description}</p>
          <ul>
            <li>
              <span>Pressure: </span>
              {weather?.main.pressure} hPa
            </li>
            <li>
              <span>Wind Speed: </span>
              {weather?.wind.speed} m/s
            </li>
            <li>
              <span>Clouds: </span>
              {weather?.clouds.all}%
            </li>
          </ul>
        </div>
      </section>
      <button onClick={changeTemperature} className="btn">
        {isCelsius ? "Change to °F" : "Change to °C"}
      </button>
    </article>
  );
};

export default WeatherCard;
