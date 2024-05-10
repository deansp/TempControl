import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {DataItem} from "./model/sensorData.ts";
import LineChart from "./components/LineChart.tsx";

function App() {
    const [tempData, setTempData] = useState<string[]>([]);
    const [humidityData, setHumidityData] = useState<string[]>([]);
    const [tempDataLabel, setTempDataLabel] = useState<string[]>([]);

    function fetchData() {
        axios.get("/api/sensordata")
            .then((response) => {
                const tempArray = response.data;
                setTempData(tempArray.map((temp: DataItem) => temp.temp))
                setHumidityData(tempArray.map((temp: DataItem) => temp.humidity))
                setTempDataLabel(response.data.map((label: DataItem) => label.id));
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (<>
            <LineChart tempData={tempData} humidityData={humidityData} tempDataLabel={tempDataLabel}/>
            <LineChart tempData={tempData} humidityData={humidityData} tempDataLabel={tempDataLabel}/>
        </>
    )
}
export default App


