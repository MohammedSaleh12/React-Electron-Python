import React, {Component} from 'react';
import {Button, Label } from 'semantic-ui-react'
import {featchitem} from '../../../Api/menu'
class Itemhandler extends Component{

    constructor(props){

        super(props)

        this.state={
            itemData :[]
        }      
    }
    componentDidMount(){
        const token = sessionStorage.getItem('token')
        featchitem(token)
        .then((result)=>{

            this.setState({itemData : result.items})
            
        })    
    }
    render(){
        const{itemData} = this.state
        
        return (
            <div>
                {itemData.map((item)=>{
                    return (
                        <Button as='div' labelPosition='right' size='mini' key={item.id}>
                            <Button basic color='blue' size='mini'>
                                {item.name}
                            </Button>
                            <Label as='a' basic color='blue' pointing='left'>
                                {item.price}
                            </Label>
                        </Button>
                    )
                })} 
            </div>
        )
    }
}

export default Itemhandler;