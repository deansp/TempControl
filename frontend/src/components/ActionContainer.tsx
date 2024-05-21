import './ActionContainer.css'
import {ChangeEvent, useEffect, useState} from "react";
import LineChart from "./LineChart.tsx";
import {Plant} from "../model/Plant.ts";
import ControllContainer from "./ControllContainer.tsx";

interface RadioProps {
    plant: Plant;
}
export default function RadioButtons(props:Readonly<RadioProps>) {
    const [selectedOption, setSelectedOption] = useState("humidityIntervall");
    const [weekSensorData,setWeekSensorData] = useState(props.plant.humidityIntervall);

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
            case "airQualiIntervall":
                setWeekSensorData(props.plant.airQualiIntervall)
                console.log(props.plant.airQualiIntervall)
                break;
    }}

    return (
        <div className={"body"}>
            <ControllContainer/>
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
                        value="airQualiIntervall"
                        checked={selectedOption === 'airQualiIntervall'}
                        onChange={handleOptionChange}
                    />
                    Luftqualität</label>
                </div>
            </div>
            <div className={"lineChart"}>
                <LineChart Data={weekSensorData} tempDataLabel={["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]}/>
            </div>
        </div>
    );
};


