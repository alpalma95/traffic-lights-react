import React from "react";
import Bulb from "./Bulb";
import "./TrafficLight.css";

const TrafficLigt = ({ lightsData, setLightsData }) => {
	return (
		<div className="traffic-light">
			{lightsData.map((x) => (
				<Bulb
					setLightsData={setLightsData}
					lightsData={lightsData}
					key={x.key}
					color={x.color}
					selected={x.selected}
				/>
			))}
		</div>
	);
};

export default TrafficLigt;
