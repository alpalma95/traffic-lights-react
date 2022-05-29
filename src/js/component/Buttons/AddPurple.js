import React, {useState} from "react";

const AddPurple = ({ lightsData, setLightsData, displayAdd }) => {
	
	const [disabled, setDisabled] = useState(false);

	const addDataHandler = () => {
		setLightsData([
			...lightsData,
			{ key: 4, color: "purple", selected: false },
		]);
		setDisabled(true);
	};

	return (
		<div>
			{!displayAdd ? null : (
				<button className="add-btn" disabled={disabled} onClick={addDataHandler}>
					Add a purple bulb
				</button>
			)}
		</div>
	);
};

export default AddPurple;