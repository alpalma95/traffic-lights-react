import React, {useState} from "react";
import AddPurple from "./AddPurple";
import Timer from "./Timer";

const Buttons = ({lightsData, setLightsData}) =>{
    const [displayAdd, setDisplayAdd] = useState(true);
    // const [displayTimer, setDisplayTimer] = useState(true);

    return (
        <div className="btn__container">
            <AddPurple 
                lightsData={lightsData}
                setLightsData={setLightsData}
                displayAdd={displayAdd}
                setDisplayAdd={setDisplayAdd}
            />
            <Timer 
                lightsData={lightsData}
                setLightsData={setLightsData}
                displayAdd={displayAdd}
                setDisplayAdd={setDisplayAdd}           
            />
        </div>
    )
}

export default Buttons;