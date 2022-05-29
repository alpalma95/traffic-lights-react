import React, {useState, useEffect} from "react";

const Timer = ({lightsData, setLightsData, setDisplayAdd}) => {
    const [automatic, setAutomatic] = useState(false);
    const [btnContent, setBtnContent] = useState("Switch automatically")
    const switchAutomatically = () => {
        let newData = [...lightsData];
        if (newData.some(x => x.selected)){
            for (let i = 0; i < newData.length; i ++){
                if (newData[i].selected && i != newData.length - 1){
                   newData[i].selected = false;
                   newData[i + 1].selected = true;
                   break;
                } else if (newData[i].selected  && i == newData.length - 1){
                    newData[i].selected = false;
                    newData[0].selected = true;
                    break;
                } 
               }
        } else {
            newData[0].selected = true;
        }
        setLightsData(newData)
    }

    const triggerAutomatic = () =>{
        if (!automatic) {
            setAutomatic(true)
            setDisplayAdd(false)
            setBtnContent('Stop');
            
        } else {
            setAutomatic(false)
            setDisplayAdd(true)
            setBtnContent('Switch automatically')
        }
    }

    useEffect(()=>{
        if (automatic){
            let automaticInterval = setInterval(switchAutomatically, 3000);

            return () => clearInterval(automaticInterval);
        }
        
    }, [automatic])

    

	return <button onClick={triggerAutomatic} className="timer">{btnContent}</button>
};

export default Timer;
