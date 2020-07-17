import React, {Component} from 'react';


import {
  
    CCard,
    CCardHeader,
    
  } from '@coreui/react'





class Table extends Component{

    constructor(props){

        super(props)

        this.state={
           
        }      
    }
    render(){

        return(
           
    
            <CCard className='mx-1 my-1'>
                <CCardHeader>tables </CCardHeader>
                <div className="">
                    <Label as='a' image>
                    <img src={table} alt="table"/>1
                    </Label>
                   <Label as='a' image>
                   <img src={table} alt="table"/>2
                    </Label>
                    <Label as='a' image>
                    <img src={table} alt="table"/>3
                    </Label>
                    <Label as='a' image>
                    <img src={table} alt="table"/>1
                    </Label>
                   <Label as='a' image>
                   <img src={table} alt="table"/>2
                    </Label>
                    <Label as='a' image>
                    <img src={table} alt="table"/>3
                    </Label>
                    <Label as='a' image>
                    <img src={table} alt="table"/>1
                    </Label>
                   <Label as='a' image>
                   <img src={table} alt="table"/>2
                    </Label>
                    <Label as='a' image>
                    <img src={table} alt="table"/>3
                    </Label>
                    <Label as='a' image>
                    <img src={table} alt="table"/>1
                    </Label>
           

                </div>
                   
            </CCard>
         
        ) 
    }
}

export default Table ;