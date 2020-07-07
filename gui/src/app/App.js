import React from 'react';
import Titlebar from 'react-electron-titlebar';
import { BrowserRouter, Route } from "react-router-dom"

import './App.css';

import Login from "./views/LogIn.jsx"
import Dsahbord from './views/dashBord.jsx';



function App() {
  return (
  
     

    <BrowserRouter>
    <div>
      <div>
        <Titlebar title="App Title" backgroundColor="#000000"></Titlebar>
      </div>
      <Route path="/dashbord" component={Dsahbord}/>
      <Route path="/" component={Login}/>
    </div>
    </BrowserRouter>
  
  );
}
export default App;