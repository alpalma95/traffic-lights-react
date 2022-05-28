import React, { useState } from "react";
import TrafficLight from "./component/TrafficLight";
import AddPurple from "./component/AddPurple";

export default function App() {
	const [lightsData, setLightsData] = useState([
		{
			key: 1,
			color: "red",
			selected: false,
		},
		{ key: 2, color: "orange", selected: false },
		{ key: 3, color: "green", selected: false },
	]);

	return (
		<div className="app__container">
			<TrafficLight
				lightsData={lightsData}
				setLightsData={setLightsData}
			/>
			<AddPurple lightsData={lightsData} setLightsData={setLightsData} />
		</div>
	);
}
