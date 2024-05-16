import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {DataItem} from "./model/sensorData.ts";
import PlantCard from "./components/PlantCard.tsx";
import headerPicture from "./assets/logo.png";
import {Link, Route, Routes} from "react-router-dom";
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
    const pic1:string = "https://cdn.pixabay.com/photo/2023/09/15/12/43/living-room-8254772_1280.jpg"
    const pic2:string = "https://cdn.pixabay.com/photo/2016/11/20/08/03/cactus-1842095_1280.jpg"
    const pic3:string = "https://cdn.pixabay.com/photo/2023/11/02/13/33/plant-8360684_1280.png"
    return (<>
            <header>
                <img src={"https://cdn.pixabay.com/photo/2021/08/16/00/23/bonsai-tree-6548982_1280.png"} alt={"Logo"}/>
                <h1>Leaf Love</h1>
            </header>

            <Routes>
                <Route path="/" element={
                    <section className={"contentBodyContainer"}>
                        <PlantCard url={pic1} name={"Merle"} art={"Monstera"} status={"sehr gutes Wohlbefinden"}/>
                        <PlantCard url={pic2} name={"Ronni"} art={"Efeu tute"} status={"gutes Wohlbefinden"}/>
                        <PlantCard url={pic3} name={"Uschi"} art={"Canabi chillus"} status={"schlechtes Wohlbefinden"}/>
                    </section>
                }/>
                <Route path="/details" element={
                    <div>
                        <Link to="/">zurück</Link> <br/>
                        Temperatur: {currentTemp} °C <br/>
                        Luftfeuchtigkeit: {currentHumidity} %
                    </div>
                }/>
            </Routes>


        </>
    )
}

export default App


