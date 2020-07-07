import React, {Component } from 'react';
import axios from 'axios'
import {Redirect} from "react-router-dom"

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
        if(sessionStorage.getItem('Token')){
            this.setState({logedIn:true})
        }else{
            this.setState({logedIn:false})
        }   
    }

    render(){
        const { username, password } = this.state;
        
        if(sessionStorage.getItem('Token')){
            return (
                <Redirect to={'/dashbord'}/>
            )
        }else{
            return(
                <div className= 'container py-4 '>
                <div className="col-md-6 col-md-offset-3">
                <div className="alert alert-info ">
                    Username: superuser<br />
                    Password: 12345678
                </div>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
    
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
        
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" >Login</button>
    
                    </div>
    
                </form>
                </div>
            </div>
            )
        }

    }
}

export default Login;



