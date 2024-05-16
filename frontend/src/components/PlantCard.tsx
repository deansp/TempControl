import './PlantCard.css'
import {Link} from "react-router-dom";
interface CardProps {
    url: string;
    name: string;
    art: string;
    status:string;
}

export default function PlantCard(props:Readonly<CardProps>){
    return <div className={"card"}>
        <img src={props.url} alt={"poster"}/>
        <h2>{props.name} <br/></h2>
        <div>
            {props.art} <br/><br/>
            {props.status} <br/>
            <Link to="/details">Details</Link>
        </div>
    </div>
}