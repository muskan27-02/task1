import React, { Component, useState} from 'react'
import { useNavigate } from 'react-router';

export default function Login( props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setmsg] = useState("login to continue")
    let navigate= useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username==="xyz" && password ==="xyz"){
           
            console.log("correct password");
              props.setValid(true);
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

