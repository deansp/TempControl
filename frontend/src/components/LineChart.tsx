import {Line} from "react-chartjs-2";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip
} from "chart.js";

interface LineChartProps {
    Data: String[];
    tempDataLabel: String[];
}
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Tooltip,Legend)

export default function LineChart(props:Readonly<LineChartProps>){
    const lineChartsData ={
        labels: props.tempDataLabel,
        datasets:[{
            label:"",
            data:props.Data,
            borderColor:"rgb(60,98,34)"}],
    }
    const options = {
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                } }
        }
    };
    return <Line options={options} data={lineChartsData}/>
}