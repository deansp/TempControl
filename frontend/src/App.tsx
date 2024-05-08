import './App.css'
import {Line} from "react-chartjs-2"
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from "chart.js"

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)

function App() {

    const options = {};
    const lineChartsData ={
        labels: ["MO","DI","Mi"], datasets:[{label:"steps", data:[3,4,2],borderColor:"rgb(75,192,192)"}]}

    return (
        <>
            <Line options={options} data={lineChartsData}/>
        </>
    )
}

export default App
