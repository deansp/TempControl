import './RadioLineChart.css'
import {ChangeEvent, useEffect, useState} from "react";
import LineChart from "./LineChart.tsx";
import {Plant} from "../model/Plant.ts";

interface RadioProps {
    plant: Plant;
}
export default function RadioButtons(props:Readonly<RadioProps>) {
    const [selectedOption, setSelectedOption] = useState("humidityIntervall");
    const [weekSensorData,setWeekSensorData] = useState(props.plant.humidityIntervall);
    const [LEDStatus,setLEDStatus]=useState("aus")

    useEffect(() => {
        if (props.plant && props.plant.humidityIntervall) {
            setWeekSensorData(props.plant.humidityIntervall);
        }
    }, [props.plant]);
    const handleOptionChange = (event:ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
        switch (event.target.value) {
            case "humidityIntervall":
                setWeekSensorData(props.plant.humidityIntervall)
                break;
            case "tempIntervall":
                setWeekSensorData(props.plant.tempIntervall)
                break;
            case "AirQualiIntervall":
                setWeekSensorData(["65","60","80","75","70","60","80"])
                break;
            default:
                setWeekSensorData(props.plant.humidityIntervall)
                break;
    }}
    const toggleButton = () => {
        if(LEDStatus==="aus"){setLEDStatus("an");
        }else{setLEDStatus("aus")}}


    return (
        <div className={"body"}>
            <div className={"buttonContainer"}>
                <div>
                    <button className="round-button">
                    <img src="https://cdn.pixabay.com/photo/2012/05/07/18/11/watering-can-48878_1280.png" alt="Gießen" className="button-icon"/>
                    </button><span>Bewässerung</span>
                </div>
                <div>
                    <button className="round-button" onClick={toggleButton}>{LEDStatus}</button>
                    <span>Beleuchtung</span>
                </div>
            </div>
            <div>
                <h2>Wochenübersicht</h2> <br/>
                <div><label>
                    <input
                        type="radio"
                        value="humidityIntervall"
                        checked={selectedOption === 'humidityIntervall'}
                        onChange={handleOptionChange}
                    />
                    Feuchtigkeit</label>
                </div>
                <div><label>
                    <input
                        type="radio"
                        value="tempIntervall"
                        checked={selectedOption === 'tempIntervall'}
                        onChange={handleOptionChange}
                    />
                    Temperatur</label>
                </div>
                <div><label>
                    <input
                        type="radio"
                        value="AirQualiIntervall"
                        checked={selectedOption === 'AirQualiIntervall'}
                        onChange={handleOptionChange}
                    />
                    Luftqualität</label>
                </div>
            </div>
            <div className={"lineChartContainer"}>
                    <div className={"lineChart"}>
                        <LineChart Data={weekSensorData}
                                   tempDataLabel={["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]}/>
                    </div>
                </div>
        </div>
    );
};

