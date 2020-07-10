import React, {Component} from 'react';


import Item from "./item.jsx"

import Cetagory from "./cetagory.jsx"

class Menu extends Component{

    constructor(props){

        super(props)

        this.state={
           
        }      
    }
    render(){

        return(
            
           <Cetagory/>
           <Item/>
        ) 
    }
}

export default Menu;