import React, {useState} from "react";
import AddPurple from "./AddPurple";
import Timer from "./Timer";
import "./Buttons.css";

const Buttons = ({lightsData, setLightsData}) =>{
    const [displayAdd, setDisplayAdd] = useState(true);

    return (
        <div className="btn__container">
            <AddPurple 
                lightsData={lightsData}
                setLightsData={setLightsData}
                displayAdd={displayAdd}
            />
            <Timer 
                lightsData={lightsData}
                setLightsData={setLightsData}
                setDisplayAdd={setDisplayAdd}           
            />
        </div>
    )
}

export default Buttons;