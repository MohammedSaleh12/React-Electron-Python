import React, { Component } from 'react';
import sizeMe from 'react-sizeme'
import { Resizable } from "re-resizable";
import Buttons from './buttonpanale.jsx'
import Cart from './cart'

import "./layout.css"
class Cartlayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
    this.handleResize= this.handleResize.bind(this);
  }
  componentWillMount(){   

    let {width, height } = this.props.size
   
    this.setState({
        Height: height,
        Wight: width,
        
    })
    
  }
  handleResize = ()=>{
    let { width ,height } = this.props.size
    this.setState({
        Height: height,
        Wight: width,
        
    }) 
  }
  componentDidMount(){
    window.addEventListener("resize" ,  this.handleResize )
   
  }
  componentWillUpdate(){
    
  }

  render() {
    const heightM = (H, R)=>{
      let col= H/ 12
      return col * R 
  }

    let oSize = {
      
      height: heightM(this.state.Height , 8) -5
    }
    const oStyle = {
      display: "flex",
      padding: '0px',
      border: "solid 1px #ddd",
      background: "#f0f0f0",
     
      
      
    }
    let iSize = {
    
      height: heightM(this.state.Height , 4) -10
    }
    const iStyle = {

      display: "flex",
      padding: '0px',
      border: "solid 1px #ddd",
      background: "#f0f0f0",
      
      
    }

    return (
      
      <div className="layout">
     
      <Resizable 
        style={oStyle} 
        size={oSize}
        bounds= 'parent'
        className = 'box o'
      >
      <Cart/>
      </Resizable>
      <Resizable 
        style={iStyle} 
        size={iSize}
        bounds= 'parent'
        className = 'box item'
      >
      <Buttons/>
      </Resizable>
      
      </div>
    )
  }

 
}
export default sizeMe({ monitorHeight: true  })(Cartlayout);