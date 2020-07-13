import React, {Component} from 'react'
import sizeMe from 'react-sizeme'
import { Resizable } from "re-resizable";
import { View } from 'react-desktop/macOs';
import { connect } from 'react-redux'


import ClientScorce from './clientScorce/ClientScorce'

const mapStateToProps = (state)=>{
    return {
        sidebarStatas:  state.changeState.sidebarShow
    } 
}

class Pos extends Component{

    constructor(props){

        super(props)

        this.state={
           Height: '',
           Wight:'',
           Sidebartoggle :''
           
        }
        this.handleResize= this.handleResize.bind(this);      
    }
    
    componentWillMount(){   

        let { width } = this.props.size
        let height = window.innerHeight 
        this.setState({
            Height: height,
            Wight: width,
            Sidebartoggle : false
        })
        console.log("wilmount",this.props.sidebarStatas , this.state.Sidebartoggle )  
    }

    handleResize = ()=>{
        const { width } = this.props.size
        this.setState({
            Height: window.innerHeight,
            Wight: width,
            Sidebartoggle : false
        })
    }

    componentDidMount(){
        const { width } = this.props.size
        if(this.state.Wight !== width && this.state.Height !==  window.innerHeight){
            this.handleResize()
        }
        window.addEventListener("resize" ,  this.handleResize )
        // console.log('dm',this.state.Wight ,width,this.state.Height ,window.innerHeight )
 
    }
    componentDidUpdate(){
        const { width } = this.props.size
        if(this.state.Wight !== width ){
            this.handleResize()
        }
        // console.log('up',this.state.Wight , width ,this.state.Height ,window.innerHeight )
    }
  
    componentWillUnmount(){
        // const { width } = this.props.size
        // if(this.state.Wight !== width && this.state.Height !==  window.innerHeight){
        //     this.handleResize()
        // }
        // console.log('um',this.state.Wight ,width ,this.state.Height ,window.innerHeight )
    }

    
    
    render(){
        
        
        const widthM = (width , col)=>{
            let colgrid = width / 12
            return colgrid * col 
        }

        const tiStyle = {
            display: "flex",
            padding: '10px',
            border: "solid 1px #ddd",
            background: "#f0f0f0",
            
        };
        const cartstyle = {
            display: "flex",
            border: "solid 1px #ddd",
            background: "#f0f0f0"
          };
        let  contentHeight = this.state.Height -120
        let tiSize = {
            width: widthM(this.state.Wight , 7) ,
            height: contentHeight
        }
        // let  cartHeight= this.state.Height -120
        let cartsize = {
            width: widthM(this.state.Wight , 5) ,
            height: contentHeight
        }
        let extrabutton= {
            
            height: contentHeight
        }
     
        return(
       
            <View
                background="#f0f0f0"
                padding="0px"
                margin = "0px"
                width={String(this.state.Width)+'px'}
                height={String(this.state.Height -106)+'px' }
            >   
                <Resizable 
                style={tiStyle} 
                // defaultSize={tiSize}
                size={tiSize}
                bounds= 'parent'
                >
           
                  <ClientScorce />
            
                </Resizable>
                <Resizable 
                style={cartstyle} 
                // defaultSize={cartsize}
                size={cartsize}
                bounds= 'parent'
                >
                  cart
                </Resizable>
            
            </View>
        ) 
    }

}

export default connect(mapStateToProps)(sizeMe({ monitorHeight: true })(Pos));
