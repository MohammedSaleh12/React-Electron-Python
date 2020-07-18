import React, {Component } from 'react';
import featchLogin from '../Api/getLogin.js';
import {Redirect} from "react-router-dom"

import '../assets/css/style.css'
import '../assets/css/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../assets/css/css/main.css'

import NewWave from '../assets/img/NewWave.png';
import bg from '../assets/img/bg.png';


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
        if(this.state.username && this.state.password){
            featchLogin(this.state.username , this.state.password)
            .then((result)=>{
                let token = result
                if(token.token){
                    console.log(token )
                    sessionStorage.setItem('userData', token)
                    this.setState({logedIn: true})
                }
                else{
                    console.log('username and password did not match')
                }
            }) 
        }      
    }


    render(){
    
        const { username, password } = this.state;
        
        if(this.state.logedIn === true){
            return (
                <Redirect to={'/dashbord'}/>
            )
        }else{
            return(
                <div>
                <img className="wave" src={NewWave} alt="NewWave"></img>
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



