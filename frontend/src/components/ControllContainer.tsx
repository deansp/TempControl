import {useState} from "react";
import './ControllContainer.css'

export default function ControllContainer(){
    const [LEDStatus,setLEDStatus]=useState("aus")

    const toggleButton = () => {
        if(LEDStatus==="aus"){setLEDStatus("an");
        }else{setLEDStatus("aus")}}
    return <div className={"buttonContainer"}>
        <div>
            <button className="round-button">
                <img src="https://cdn.pixabay.com/photo/2012/05/07/18/11/watering-can-48878_1280.png" alt="Gießen"
                     className="button-icon"/>
            </button>
            <span>Bewässerung</span>
        </div>
        <div>
            <button className="round-button" onClick={toggleButton}>{LEDStatus}</button>
            <span>Beleuchtung</span>
        </div>
    </div>
}