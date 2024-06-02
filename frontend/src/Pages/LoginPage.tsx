import {FormEvent, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import './LoginPage.css'

export default function LoginPage(){
    const[username,setUsername] = useState<string>("")
    const[password,setPassword] = useState<string>("")
    const navigate = useNavigate()

    function onSubmitLogin(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        axios.post("/api/user/login",undefined,{auth:{username,password}})
            .then(()=>{
                    navigate("/home");
                    window.location.reload();
            })
    }


    return (<form onSubmit={onSubmitLogin}>
            <div className={"form"}>
                <h2>Willkommen</h2> <br/>
                <input value={username} placeholder={"Username"} type={"text"}
                       onChange={e => setUsername(e.target.value)}/>
                <input value={password} placeholder={"Password"} type={"password"}
                       onChange={e => setPassword(e.target.value)}/>
                <button>login</button>
            </div>
        </form>
    )
}