import React from "react";

const AddPurple = ({ lightsData, setLightsData, displayAdd, setDisplayAdd }) => {
	

	const addDataHandler = () => {
		setLightsData([
			...lightsData,
			{ key: 4, color: "purple", selected: false },
		]);
		setDisplayAdd(false);
	};

	return (
		<div>
			{!displayAdd ? null : (
				<button className="add-btn" onClick={addDataHandler}>
					Add a purple bulb
				</button>
			)}
		</div>
	);
};

export default AddPurple;
