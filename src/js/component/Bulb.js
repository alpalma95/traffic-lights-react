import React from "react";

const Bulb = ({ color, selected, lightsData, setLightsData }) => {
	const setDataHandler = (e) => {
		setLightsData(
			lightsData.map((x) => {
				let i;
				if (x.color === e.target.classList[1]) {
					i = { ...x };
					i.selected = true;
					return i;
				} else {
					i = { ...x };
					i.selected = false;
					return i;
				}
			})
		);
	};
	return (
		<div
			className={`bulb ${color} ${selected ? "selected" : ""}`}
			onClick={setDataHandler}></div>
	);
};

export default Bulb;
