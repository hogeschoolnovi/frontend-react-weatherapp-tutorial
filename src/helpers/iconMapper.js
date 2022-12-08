import React from 'react';
import { ReactComponent as Sunny } from '../assets/icons/sun.svg';
import { ReactComponent as Rain } from '../assets/icons/rain.svg';
import { ReactComponent as Clouds } from '../assets/icons/clouds.svg';
import { ReactComponent as Snow } from '../assets/icons/snow.svg';
import { ReactComponent as Wind } from '../assets/icons/wind.svg';
import { ReactComponent as Drizzle } from '../assets/icons/sun-rain.svg';

function iconMapper(weatherType) {
  switch (weatherType) {
    case 'Clear':
      return <Sunny/>;
    case 'Clouds':
      return <Clouds/>;
    case 'Drizzle':
      return <Drizzle/>;
    case 'Rain':
      return <Rain/>;
    case 'Snow':
      return <Snow/>;
    case 'Mist':
    case 'Haze':
    case 'Smoke':
    case 'Fog':
    default:
      return <Wind/>;
  }
}

export default iconMapper;