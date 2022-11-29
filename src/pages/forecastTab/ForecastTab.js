import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForecastTab.css';

const apiKey = '--plaats jouw unieke API key hier--';

function createDateString(timestamp) {

}

function ForecastTab({ coordinates }) {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    async function fetchForecasts() {
      try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&lang=nl`);
          console.log(response.data);

          const fiveDayForecast = response.data.list.filter((singleForecast) => {
            return singleForecast.dt_txt.includes("12:00:00");
          });

          setForecasts(fiveDayForecast);
      } catch(e) {
          console.error(e);
      }
    }

    if (coordinates) {
      fetchForecasts();
    }
  }, [coordinates]);

  return (
    <div className="tab-wrapper">
      {forecasts.map((singleForecast) => {
        return <article className="forecast-day">
          <p className="day-description">
            Maandag
          </p>

          <section className="forecast-weather">
            <span>
              {singleForecast.main.temp}&deg; C
            </span>
            <span className="weather-description">
              {singleForecast.weather[0].description}
            </span>
          </section>
        </article>
      })}
    </div>
  );
}

export default ForecastTab;
