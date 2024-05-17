import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {sensorData} from "./model/sensorData.ts";
import PlantCard from "./components/PlantCard.tsx";
import {Link, Route, Routes} from "react-router-dom";
import LineChart from "./components/LineChart.tsx";
import statusPic from "./assets/status.jpeg";
import Details from "./components/Details.tsx";

function App() {
    const [plants, setPlants] = useState<sensorData[]>([]);
    function fetchData() {
        axios.get("/api/sensordata")
            .then((response) => {
                setPlants(response.data)
            })
    }

    useEffect(() => {fetchData()}, [])

    return (<>
            <header>
                <img src={"https://cdn.pixabay.com/photo/2021/08/16/00/23/bonsai-tree-6548982_1280.png"} alt={"Logo"}/>
                <h1>Leaf Love</h1>
            </header>

            <Routes>
                <Route path="/" element={
                    <section className={"contentBodyContainer"}>
                        {plants.map((plant: sensorData) => (
                            <PlantCard plant={plant} id={plant.id}/>
                        ))}
                    </section>
                }/>
                <Route path="/details" element={
                    <div >
                        <Details/>
                    </div>
                }/>
            </Routes>
        </>
    )
}

export default App


