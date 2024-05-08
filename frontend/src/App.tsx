import './App.css'
import {Line} from "react-chartjs-2"
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from "chart.js"
import {useEffect, useState} from "react";
import axios from "axios";
import {DataItem} from "./nodel/sensorData.ts";

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)

function App() {

    const [TempData, setTempData] = useState<string[]>([]);
    const [TempDataLabel, setTempDataLabel] = useState<string[]>([]);

    const options = {};
    const lineChartsData ={
        labels: TempDataLabel, datasets:[{label:"Temperatur", data:TempData,borderColor:"rgb(75,192,192)"}],
    }

    function fetchData() {
        axios.get("/api/sensordata")
            .then((response) => {
                const tempArray=response.data;
                setTempData(tempArray.map((aaa:DataItem) => aaa.temp))
                setTempDataLabel(response.data.map((obj:DataItem) => obj.id));
            })
    }

    useEffect(() => {fetchData()}, [])

    return (
        <>
            <Line options={options} data={lineChartsData}/>
        </>
    )
}

export default App
