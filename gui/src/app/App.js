import React from 'react';
import Titlebar from './TitleBar'
import { BrowserRouter, Route } from "react-router-dom"

import './scss/style.scss';

import './App.css';

import Login from "./views/LogIn.jsx"
import Dsahbord from './views/dashBord.jsx';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  return (
  
     

    <BrowserRouter>
    <React.Suspense fallback={loading}>
    <div>
      <div>
        <Titlebar/>
      </div>
      <Route path="/dashbord" component={Dsahbord}/>
      <Route path="/" component={Login}/>
    </div>


    </React.Suspense>
    
    </BrowserRouter>
  
  );
}
export default App;