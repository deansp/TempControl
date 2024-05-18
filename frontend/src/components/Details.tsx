import LineChart from "./LineChart.tsx";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {Plant} from "../model/Plant.ts";

export default function Details() {
    const params = useParams()
    const [plant, setPlants] = useState<Plant>();
    function fetchDataByID() {
        axios.get("/api/plant/"+ params.id)
            .then((response) => {
                setPlants(response.data)
            })}

    useEffect(() => {fetchDataByID()}, [])

    return <div className={"detailsBodyContainer"}>
        <div className={"ValueBodyContainer"}>
            <div>
                <img style={{width: '200px', height: '150px'}} src={""} alt={"poster"}/>
            </div>
            <div>
                <h2>{plant?.name} </h2><br/>
                {plant?.species} <br/>
                {plant?.status} <br/><br/>
                Temperatur: {plant?.temp} °C <br/>
                Luftfeuchtigkeit: {plant?.humidity} %<br/>
            </div>
            <div>
                <img style={{width: '200px', height: '150px'}} src={plant?.url} alt={"poster1"}/>
            </div>
        </div>
        <div className={"lineChart"}>
            <LineChart tempData={["1", "2"]} humidityData={["humidityData"]}
                       tempDataLabel={["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]}/>
        </div>
        <Link to="/">zurück</Link> <br/>
    </div>
}