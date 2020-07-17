import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
import Table from 'react-bootstrap/Table'
import './buttonGrid.css'


const useStyles = makeStyles((theme) => ({
    root: {
      background: "white",
      display: 'flex',
      flexWrap:'wrap',
      width:'100%',
      '& > *': {
        margin: '5px',
      },
     
    },
  }));

function Buttons(props){
    const classes = useStyles()
    return(
      <div className={classes.root}>
        <div className="buttonGrid">
          <Button variant="contained" size="large" color="primary" >
            Print KOT
            </Button>
          <Button variant="contained" size="large" color="primary" >
            Print Bill
            </Button>
          <Button variant="contained" size="large" color="primary" >
            Prement Sattelment
            </Button>
        </div>

        <div classname='bill'>
          <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <td class="left">
                  <strong>Subtotal</strong>
                </td>
                <td class="right">600.00</td>
              </tr>
              <tr>
                <td class="left">
                  <strong>Discount 0%</strong>
                </td>
                <td class="right">00.00</td>
              </tr>
              <tr>
                <td class="left">
                  <strong>CGST (5%)</strong>
                </td>
                <td class="right">3.00</td>
              </tr>
              <tr>
                <td class="left">
                  <strong>SGST (5%)</strong>
                </td>
                <td class="right">3.00</td>
              </tr>
              <tr>
                <td class="left">
                  <strong>Total</strong>
                </td>
                <td class="right">
                  <strong>606.00</strong>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    )
}
export default Buttons