import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {DataItem} from "./model/sensorData.ts";
import LineChart from "./components/LineChart.tsx";

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

    return (<>
            <h1>Temperatur-Dashboard</h1>
            <div className={"DisplayValue"}>
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


