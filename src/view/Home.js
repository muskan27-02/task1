import React from 'react'
import { useNavigate } from 'react-router'

export default function Home(props) {
    let navigate=useNavigate();
  return (
    props.checkValid==false?
        <div> 
            <h3>you need to login first!</h3>
            <button onClick={()=>navigate("../login",{replace:true})}>login</button>
        </div> :
        <div>
            <h1>Welcome!</h1>
            <button onClick={()=>props.setValid(false)}>log out</button>
        </div>
  )
}
