import React, { useEffect, useState } from 'react';
import './TodayTab.css';
import axios from 'axios';

const apiKey = '--plaats jouw unieke API key hier--';

function TodayTab({ coordinates }) {
	const [error, toggleError] = useState(false);

	useEffect(() => {
		async function fetchForecast() {
			try {
				const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&lang=nl`);
				console.log(response.data);

			} catch(e) {
			    console.error(e);
			}
		}
		if (coordinates) {
			fetchForecast();
		}
	}, [coordinates]);

	return(
		<div className="tab-wrapper">
			<div className="chart">
				Hier komt de chart!
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
