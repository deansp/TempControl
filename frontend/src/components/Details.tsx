import statusPic from "../assets/status.jpeg";
import LineChart from "./LineChart.tsx";
import {Link} from "react-router-dom";


export default function Details() {
    return <div className={"detailsBodyContainer"}>
        <div className={"ValueBodyContainer"}>
            <div>
                <img style={{width: '200px', height: '150px'}} src={""} alt={"poster"}/>
            </div>
            <div>
                <h2>Bob </h2><br/>
                Canabis <br/>
                gutes Wohlbefinden <br/><br/>
                Luftqualität: sehr gut <br/>
                Temperatur: 22 °C <br/>
                Luftfeuchtigkeit: 60 %<br/>
            </div>
            <div>
                <img src={statusPic} alt={"poster1"}/>
            </div>
        </div>
        <div className={"lineChart"}>
            <LineChart tempData={["1", "2"]} humidityData={["humidityData"]}
                       tempDataLabel={["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]}/>
        </div>
        <Link to="/">zurück</Link> <br/>
    </div>
}