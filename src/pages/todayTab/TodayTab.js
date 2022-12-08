import React, { useEffect } from 'react';
import './TodayTab.css';

const apiKey = '--plaats jouw unieke API key hier--';

function TodayTab({ coordinates }) {
	useEffect(() => {
		async function fetchForecast() {

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
