import React, {component, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from 'react-router-dom';
import Home from "./view/Home";
import Login from "./view/Login";


 function App() {
  const [isAuthorized, setAuthorized] = useState(false);

  return (
    <div className="App">
      

      <Routes>
        <Route  path="/login" element={<Login checkValid={isAuthorized} setValid={setAuthorized}/>} /> 
        <Route  path="/" element={<Home checkValid={isAuthorized} setValid={setAuthorized}/>} /> 
      </Routes>
    
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 <App />
  </BrowserRouter>
);

