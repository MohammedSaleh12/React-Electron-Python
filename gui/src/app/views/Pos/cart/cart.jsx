import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Table from 'react-bootstrap/Table'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
    root: {
      background: "white",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width:'100%',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
 

function Cart(props){
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            <IconButton aria-label="cart" color="primary" size="small">
                                <Badge
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                    badgeContent={1}
                                >
                                <ShoppingCartIcon fontSize="inherit" />
                                </Badge>
                            </IconButton>
                        </th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qnt</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <IconButton aria-label="delete" color="secondary" size="small">
                                <DeleteForeverIcon fontSize="inherit" />
                            </IconButton>
                        </td>
                        <td>veg briyani</td>
                        <td>200.00</td>
                        <td>
                        <IconButton aria-label="delete" color="primary" size="small">   
                            <AddCircleIcon fontSize="inherit" />
                        </IconButton>
                         3
                         <IconButton aria-label="delete" color="secondary" size="small">
                            <RemoveCircleIcon fontSize="inherit" />
                        </IconButton>
                        </td>
                        <td>600.00</td>

                    </tr>
                    {/* <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>45666</td>
                    </tr> */}
                  
                </tbody>
            </Table>
        </div>
    )
}
export default Cart