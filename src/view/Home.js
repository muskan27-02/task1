import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router'
import Item from "../components/Item"
export default function Home(props) {

  let navigate=useNavigate();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


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
  
  if(props.checkValid===false){
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
        <button onClick={()=>props.setValid(false)}>log out</button>
      </div>
    );
  }  
  
}
