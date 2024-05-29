import './DetailPage.css'
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {Plant} from "../model/Plant.ts";
import RadioButtons from "../components/ActionContainer.tsx";

export default function DetailPage() {
    const params = useParams()
    const [plant, setPlants] = useState<Plant>({
        id: "",
        name: "",
        species: "",
        status: "",
        temp: "",
        humidity: "",
        airQuali:"",
        url: "",
        comment: "",
        tempIntervall: [],
        humidityIntervall: [],
        airQualiIntervall:[]
    })
    function fetchDataByID() {
        axios.get("/api/plant/detail/"+ params.id)
            .then((response) => {
                setPlants(response.data)
            })}
    useEffect(() => {fetchDataByID()}, [])

    return <div>
        <div className={"Head"}>
            <h2>{plant.name} </h2>
            {plant.species}
        </div>
        <div className={"DetailsContainer"}>
            <div>
                <img style={{width: '300px'}} src={plant.url} alt={"plant"}/>
            </div>
            <div>
                <h3>Infos:</h3>
                {plant.comment}
            </div>
            <div className={"plantInfo"}>
                <h3>Planzenbefinden:</h3>
                {plant.status}<br/><br/>
                Temperatur: {plant.temp} °C <br/>
                Feuchtigkeit: {plant.humidity} %<br/>
                Luftqualität: {plant.airQuali} ppm
            </div>
        </div>
        <hr className="custom-line"/>
        <RadioButtons plant={plant}/>
        <Link to="/home">zurück</Link> <br/>
    </div>
}