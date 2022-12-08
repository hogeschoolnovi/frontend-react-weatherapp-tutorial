import React from 'react';
import './WeatherDetail.css';
import kelvinToCelsius from '../../helpers/kelvinToCelsius';

function WeatherDetail({ type, description, temp}) {
  return (
    <section className="day-part">
      <span className="icon-wrapper">
        *Icoontje van het weer*
      </span>
      <p className="description">{description}</p>
      <p>{kelvinToCelsius(temp)}</p>
    </section>
  );
}

export default WeatherDetail;
