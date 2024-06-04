import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Plant} from "./model/Plant.ts";
import PlantCards from "./components/PlantCards.tsx";
import {Route, Routes, useNavigate} from "react-router-dom";
import DetailPage from "./Pages/DetailPage.tsx";
import LoginPage from "./Pages/LoginPage.tsx";
import ProtectedRoute from "./Pages/ProtectedRoute.tsx";


export default function App() {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [user, setUser] = useState<string | undefined>("")
    const navigate = useNavigate()

    function fetchData() {
        axios.get("/api/plant")
            .then((response) => {
                setPlants(response.data)
            })}

    useEffect(() => {
        fetchData()
        getUser()
    }, [])

    function getUser(){
        axios.get("api/user/me")
            .then(response=>
            setUser(response.data))
    }
    function logout(){
        axios.post("/api/user/logout")
            .then(() => {
                getUser();
                navigate("/");
                })

    }
    return (<>
            <header>
                <div className={"headline"}>
                    <img src={"https://cdn.pixabay.com/photo/2021/08/16/00/23/bonsai-tree-6548982_1280.png"}
                         alt={"Logo"}/>
                    <h1>Leaf Love</h1>
                </div>
                <div className={"user"}>
                    {user === "Dean" ? <button onClick={logout}>{user} ausloggen</button>:""}
                </div>
            </header>
            <Routes>
                <Route path="/" element={<LoginPage setUser={setUser} />} />
                <Route element={<ProtectedRoute user={user} />}>
                    <Route path="/home" element={
                        <div className={"contentBodyContainer"}>
                            {plants.map((plant: Plant) => (
                                <PlantCards plant={plant} key={plant.id} />
                            ))}
                        </div>
                    } />
                </Route>
                <Route element={<ProtectedRoute user={user} />}>
                    <Route path="/details/:id" element={<DetailPage />} />
                </Route>
            </Routes>
        </>
    )
}



