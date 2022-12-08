import React, { useEffect, useState } from 'react';
import './TodayTab.css';
import axios from 'axios';
import WeatherDetail from '../../components/weatherDetail/WeatherDetail';

const apiKey = '--plaats jouw unieke API key hier--';

function TodayTab({ coordinates }) {
	const [forecasts, setForecasts] = useState([]);
	const [error, toggleError] = useState(false);
	const [loading, toggleLoading] = useState(false);

	useEffect(() => {
		async function fetchForecast() {
			toggleError(false);
			toggleLoading(true);

			try {
				const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&lang=nl`);
				console.log(response.data);
				setForecasts(response.data.list.slice(0, 3));

			} catch(e) {
			    console.error(e);
					toggleError(true);
			}

			toggleLoading(false);
		}
		if (coordinates) {
			fetchForecast();
		}
	}, [coordinates]);

	return(
		<div className="tab-wrapper">
			<div className="chart">
				{forecasts.map(() => {

				})}
			</div>
			<div className="legend">
				<span>08:00 uur</span>
				<span>12:00 uur</span>
				<span>16:00 uur</span>
			</div>
		</div>
  );
}

export default TodayTab;
