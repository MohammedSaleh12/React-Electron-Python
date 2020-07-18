import React, {Component} from 'react';
import TableButton from '../../../components/TableButton'
import featchtable from '../../../Api/tables'
class TablesHandler extends Component{

    constructor(props){

        super(props)

        this.state={
           
           
        }      
    }
    componentDidMount(){
        const token = sessionStorage.getItem('token')
        featchtable(token)
        .then((result)=>{
            
         
            this.setState({result})
            
        })    
    }
    render(){
        
        const { result} =this.state
        return (
            <div>
                {/* {result.map(tables =>{
                    return(
                        <TableButton no={tables.no}/>
                    )
                })} */}
               

            </div>

        ) 
    }
}

export default TablesHandler;