import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import Item from "../components/Item"
import loginSlice, { logout } from '../features/login/loginSlice'
import { useSelector,useDispatch } from 'react-redux'
import store from '../app/store'

export default function Home() {

  let navigate=useNavigate();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
    .then(res=>res.json())
    .then(
      res=>{
        setIsLoaded(true);
        setItems(res);
      },
      (error)=>{
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])
  const isValid= useSelector(state=>state.login)
  // console.log(isValid.isAuthorized);
  if(!isValid.isAuthorized){
    return (
      <div> 
        <h3>you need to login first!</h3>
        <button onClick={()=>navigate("../login",{replace:true})}>login</button>
      </div> 
    );
  } else if(error){
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else{
    const listItems= items.map((item)=>
      <li>
        <Item 
          title={item.title}
          price={item.price} 
          img={item.image}
          star={item.rating.rate}
          stock={item.rating.count}
        />
      </li>
    );
    return(
      <div>
        <ul>{listItems}</ul>
        <button onClick={()=>dispatch(logout())}>log out</button>
      </div>
    );
  }  
  
}
