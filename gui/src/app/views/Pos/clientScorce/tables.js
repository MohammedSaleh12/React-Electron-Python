import React, {Component} from 'react';
import TableButton from '../../../components/TableButton'
import featchtable from '../../../Api/tables'
class TablesHandler extends Component{

    constructor(props){

        super(props)

        this.state={
            tableData : []
        }      
    }
    componentDidMount(){
        const token = sessionStorage.getItem('token')
        featchtable(token)
        .then((result)=>{

            this.setState({tableData : result.tables})
            
        })    
    }
    render(){
        
        const {tableData} = this.state
        
      
        
        return (
            <div>
                {tableData.map(tables =>{
                    return(
                        <TableButton no={tables.no} key={tables.id}/>
                    )
                })}
               

            </div>

        ) 
    }
}

export default TablesHandler;