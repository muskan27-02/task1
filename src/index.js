import React, {component, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store'
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
        <Route  path="/login" element={<Login />} /> 
        <Route  path="/" element={<Home />} /> 
      </Routes>
    
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
 
  </BrowserRouter>
);

