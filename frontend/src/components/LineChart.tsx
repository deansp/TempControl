import {Line} from "react-chartjs-2";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";

interface LineChartProps {
    tempData: String[];
    humidityData: String[];
    tempDataLabel: String[];
}
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)

export default function LineChart(props:Readonly<LineChartProps>){
    const lineChartsData ={
        labels: props.tempDataLabel, datasets:[{label:"Temperatur", data:props.tempData,borderColor:"rgb(75,192,192)"},
            {label:"Feuchtigkeit", data:props.humidityData,borderColor:"rgb(192,85,75)"}]
    }
    const options = {};
    return <Line options={options} data={lineChartsData}/>
}