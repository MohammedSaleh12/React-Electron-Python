import React, {Component } from 'react';
import axios from 'axios'
import {Redirect} from "react-router-dom"

import '../assets/css/style.css'
import '../assets/css/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assets/css/vendor/animate/animate.css'
import '../assets/css/vendor/css-hamburgers/hamburgers.min.css'
import '../assets/css/vendor/select2/select2.min.css'
import '../assets/css/css/util.css'
import '../assets/css/css/main.css'

import wave from '../assets/img/wave.png';
import bg from '../assets/img/bg.png';



const base64 = require('base-64');

class Login extends Component{

    constructor(props){
        super(props)

        this.state={
            username: '' ,
            password: '',
            logedIn: false,            
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.state)
        let basic = 'Basic ' + base64.encode(this.state.username + ":" + this.state.password)
        
        let login = {
            method: 'get',
            url: 'http://127.0.0.1:5000/login',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin' : 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true',
                'Authorization': basic,  
            }
            
          };
          if(this.state.username && this.state.username){
            axios(login)
            .then(function (response) {
                let token = JSON.stringify(response.data)
                sessionStorage.setItem('Token' , token)
                
            })
            .catch(function (error) {
              console.warn(error);
              
            });
          }
          
    }
    componentWillMount(){
        if(sessionStorage.getItem('Token')){
            this.setState({logedIn:true})
        }else{
            this.setState({logedIn:false})
        }
    }
    componentDidMount(){
        if(sessionStorage.getItem('Token')){
            this.setState({logedIn:true})
        }else{
            this.setState({logedIn:false})
        }
    }
    componentWillUpdate(){console.log(this.state.logedIn)}

    render(){
        console.log(sessionStorage.getItem('Token'))
        const { username, password } = this.state;
        
        if(this.state.logedIn === true){
            return (
                <Redirect to={'/dashbord'}/>
            )
        }else{
            return(
                <div>
                <img className="wave" src={wave} alt="wave"></img>
                <div className="container">
                    <div className="img">
			            <img src={bg} alt="bg"/>
		            </div>
                <div className="login-content">
                <form className="form" name="form" onSubmit={this.handleSubmit}>
                    
                    <span className="login100-form-title">
						Login
					</span>
                
                    <div className="wrap-input100 validate-input">
                        <input className="input100" type="text" placeholder="Enter Username" name="username" value={username} onChange={this.handleChange} />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate = "Password is required">
                        <input className="input100" type="password"  placeholder="Enter Password" name="password" value={password} onChange={this.handleChange} />
                        <span className="focus-input100"></span>
                        <span className="symbol-input100">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="container-login100-form-btn">
                     <button type="submit" className="login100-form-btn">Login</button>
                    </div>
            
                </form>
                </div>
                </div>
                </div>

             
            )
        }

    }
}

export default Login;



