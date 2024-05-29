import {FormEvent, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function LoginPage(){
    const[username,setUsername] = useState<string>("")
    const[password,setPassword] = useState<string>("")
    const navigate = useNavigate()

    function onSubmitLogin(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        axios.post("/api/user/login",undefined,{auth:{username,password}})
            .then(response=>{
                if (response.status === 200) {
                    navigate("/home");
                    window.location.reload();
                } else {
                    alert("Login failed");
                }
            })
    }

    return (<form onSubmit={onSubmitLogin}>
            <input value={username} placeholder={"Username"} type={"text"}
                   onChange={e => setUsername(e.target.value)}/>
            <input value={password} placeholder={"Password"} type={"password"}
                   onChange={e => setPassword(e.target.value)}/>
            <button>login</button>
        </form>
    )
}