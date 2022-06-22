import React, { Component, useState} from 'react'
import { useNavigate } from 'react-router';
import { login } from '../features/login/loginSlice'
import { useDispatch } from 'react-redux'


export default function Login( ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setmsg] = useState("login to continue")
    const dispatch = useDispatch()
    let navigate= useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username==="xyz" && password ==="xyz"){
           
            console.log("correct password");
            dispatch(login());
            navigate("../",{replace:true});
        
        }
        else{
            console.log("wrong password");
            setUsername("");
            setPassword("");
            setmsg("wrong password, try again!");
        }
    }
  return (
    <div>
        <h1>Login page</h1>
        <h4>{msg}</h4>
        <form onSubmit={handleSubmit}>
            <label> Username:
                <input value= {username} type="text" onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            <label> password:
                <input value= {password} type ="text"  onChange={(e)=>setPassword(e.target.value)}/>
            </label>
                <input type="submit" value="submit" />
        </form>
    </div>
  )
}

