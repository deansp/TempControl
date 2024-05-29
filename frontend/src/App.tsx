import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Plant} from "./model/Plant.ts";
import PlantCards from "./components/PlantCards.tsx";
import {Route, Routes} from "react-router-dom";
import DetailPage from "./Pages/DetailPage.tsx";
import LoginPage from "./Pages/LoginPage.tsx";
import ProtectedRoute from "./Pages/ProtectedRoute.tsx";

export default function App() {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [user, setUser] = useState("")
    function fetchData() {
        axios.get("/api/plant")
            .then((response) => {
                setPlants(response.data)
            })}

    useEffect(() => {
        fetchData()
        getUser()
    }, [])

    useEffect(() => {
        getUser();
    }, [user]);

    function getUser(){
        axios.get("api/user/me")
            .then(response=>
            setUser(response.data))
    }
    return (<>
            <header>
                <img src={"https://cdn.pixabay.com/photo/2021/08/16/00/23/bonsai-tree-6548982_1280.png"} alt={"Logo"}/>
                <h1>Leaf Love</h1>
                {user}
            </header>
            <Routes>
                <Route path="/" element={
                    <LoginPage />
                }/>
                    <Route path="/home" element={
                        <div className={"contentBodyContainer"}>
                            {plants.map((plant: Plant) => (
                                <PlantCards plant={plant} key={plant.id}/>
                            ))}
                        </div>
                    }/>
                <Route element={<ProtectedRoute user={user}/>}>
                    <Route path="/details/:id" element={
                        <DetailPage/>
                    }/>
                </Route>
            </Routes>
        </>
    )
}



