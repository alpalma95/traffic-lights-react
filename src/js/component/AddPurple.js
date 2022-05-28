import React, { useState } from "react";
import "./AddPurple.css";

const AddPurple = ({ lightsData, setLightsData }) => {
	const [returnNull, setReturnNull] = useState(false);

	const addDataHandler = () => {
		setLightsData([
			...lightsData,
			{ key: 4, color: "purple", selected: false },
		]);
		setReturnNull(true);
	};

	return (
		<div>
			{returnNull ? null : (
				<button className="add-btn" onClick={addDataHandler}>
					Add a purple bulb
				</button>
			)}
		</div>
	);
};

export default AddPurple;
