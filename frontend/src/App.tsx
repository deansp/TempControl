import './App.css'
import axios from "axios";
import {DataItem} from "./model/sensorData.ts";
import LineChart from "./components/LineChart.tsx";
import {useEffect, useState} from "react";

function App() {
    const [tempData, setTempData] = useState<string[]>([]);
    const [humidityData, setHumidityData] = useState<string[]>([]);
    const [tempDataLabel, setTempDataLabel] = useState<string[]>([]);
    const [currentTemp, setCurrentTemp] = useState<string>("");
    const [currentHumidity, setCurrentHumidity] = useState<string>("");

    function fetchData() {
        axios.get("/api/sensordata")
            .then((response) => {
                const tempTemp = response.data.map((temp: DataItem) => temp.temp)
                const tempHumidity = response.data.map((hum: DataItem) => hum.humidity)
                setTempData(tempTemp)
                setHumidityData(tempHumidity)
                setTempDataLabel(response.data.map((label: DataItem) => label.id));
                setCurrentTemp(tempTemp[tempTemp.length-1]);
                setCurrentHumidity(tempHumidity[tempHumidity.length-1]);
            })
    }

    useEffect(() => {fetchData()}, [])

    function refreshData(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.defaultPrevented
        axios.get("/api/sensordata/getRaspiValue")
            .then((response) => {
                setCurrentTemp(response.data.temp)
                setCurrentHumidity(response.data.humidity)
            }).catch(error => {
            console.error('Fehler beim Abrufen der Sensorwerte:', error);
        });
    }

    return (<>
            <h1>Temperatur Dashboard</h1>
            <div className={"DisplayValue"}>
                <button onClick={refreshData}>neue Daten</button>
                Temperatur: {currentTemp} °C <br/>
                Luftfeuchtigkeit: {currentHumidity} %
            </div>
            <div className={"lineChartContainer"}>
                <div className={"lineChart"} >
                <LineChart tempData={tempData} humidityData={humidityData}
                           tempDataLabel={["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]}/>
                </div >
                <div className={"lineChart"} >
                    <LineChart tempData={tempData} humidityData={humidityData} tempDataLabel={tempDataLabel}/>
                </div>
            </div>
        </>
    )
}

export default App


