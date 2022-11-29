import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';

const apiKey = '--plaats jouw unieke API key hier--';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=utrecht,nl&appid=${apiKey}&lang=nl`);
        console.log(response.data);
        setWeatherData(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, [location]);

  return (
    <>
      <div className="weather-container">

        {/*HEADER -------------------- */}
        <div className="weather-header">
          <SearchBar setLocationHandler={setLocation} />

          <span className="location-details">
            {Object.keys(weatherData).length > 0 &&
              <>
                <h2>{weatherData.weather[0].description}</h2>
                <h3>{weatherData.name}</h3>
                <h1>{weatherData.main.temp}</h1>
              </>
            }
          </span>
        </div>

        {/*CONTENT ------------------ */}
        <div className="weather-content">
          <TabBarMenu/>

          <div className="tab-wrapper">
            Alle inhoud van de tabbladen komt hier!
          </div>
        </div>

        <MetricSlider/>
      </div>
    </>
  );
}

export default App;
