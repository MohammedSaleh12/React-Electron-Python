import React, {Component} from 'react';

import '../assets/css/adminlte.min.css'


class Navbar extends Component{

    constructor(props){

        super(props)

        this.state={
           
        }      
    }
    render(){

        return(
            <div>
                <nav className='navbar dark'>
                    <ul>
                       <h1>navbar</h1>
                       
                    </ul>
                </nav>
            </div>
        ) 
    }
}

export default Navbar;