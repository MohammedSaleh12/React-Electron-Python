import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"

import './App.css';
import './assets/css/style.css'

import Login from "./views/LogIn.jsx"
import Dsahbord from './views/dashBord.jsx';


function App() {
  return (
    <BrowserRouter>
    <div>
     
      <Route path="/dashbord" component={Dsahbord}/>
      <Route path="/" component={Login}/>
      
    </div>
    </BrowserRouter>
  );
}
export default App;