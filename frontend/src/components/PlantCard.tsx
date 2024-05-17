import './PlantCard.css'
import {Link} from "react-router-dom";
import {sensorData} from "../model/sensorData.ts";
interface CardProps {
    id: string;
    plant: sensorData;
}

export default function PlantCard(props:Readonly<CardProps>){
    return <div className={"card"}>
        <img src={props.plant.url} alt={"poster"}/>
        <h2>{props.plant.name} <br/></h2>
        <div>
            {props.plant.species} <br/><br/>
            {props.plant.status} <br/>
            <Link to="/details">Details</Link>
        </div>
    </div>
}