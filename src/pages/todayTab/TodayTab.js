import React, { useEffect } from 'react';
import './TodayTab.css';
import axios from 'axios';

const apiKey = '--plaats jouw unieke API key hier--';

function TodayTab({ coordinates }) {
	useEffect(() => {
		async function fetchForecast() {
			try {
			    const response = await axios.get(``);
			} catch(e) {
			    console.error(e);
			}
		}

		fetchForecast();
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
