import './PlantCards.css'
import {Plant} from "../model/Plant.ts";
import {Link} from "react-router-dom";
interface CardProps {
    key: string;
    plant: Plant;
}

export default function PlantCards(props:Readonly<CardProps>){
    return <div className={"card"}>
        <img src={props.plant.url} alt={"poster"}/>
        <h2>{props.plant.name} <br/></h2>
        <div>
            {props.plant.species} <br/><br/>
            {props.plant.status} <br/>
            <Link to={`/details/${props.plant.id}`}>Details</Link>
        </div>
    </div>
}