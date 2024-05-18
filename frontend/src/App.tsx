import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Plant} from "./model/Plant.ts";
import PlantCards from "./components/PlantCards.tsx";
import {Route, Routes} from "react-router-dom";
import Details from "./components/Details.tsx";

export default function App() {
    const [plants, setPlants] = useState<Plant[]>([]);
    function fetchData() {
        axios.get("/api/sensordata")
            .then((response) => {
                setPlants(response.data)
            })}

    useEffect(() => {fetchData()}, [])

    return (<>
            <header>
                <img src={"https://cdn.pixabay.com/photo/2021/08/16/00/23/bonsai-tree-6548982_1280.png"} alt={"Logo"}/>
                <h1>Leaf Love</h1>
            </header>
            <Routes>
                <Route path="/" element={
                    <div className={"contentBodyContainer"}>
                        {plants.map((plant: Plant) => (
                            <PlantCards plant={plant} id={plant.id}/>
                        ))}
                    </div>
                }/>
                <Route path="/details/:id" element={
                    <div >
                        <Details/>
                    </div>
                }/>
            </Routes>
        </>
    )
}



