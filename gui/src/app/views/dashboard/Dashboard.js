import React from 'react'
import { Resizable } from "re-resizable";
// const style = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   border: "solid 1px #ddd",
//   background: "#f0f0f0"
// };

import Table from "../../components/tables.jsx"
import { Card } from 'semantic-ui-react';
// import Cart from "../../components/cart.jsx"

const Dashboard = () => {
  return (
    <Resizable
    style= {Card}
    defaultSize={{
      width: 200,
      height: 300,
    }}
  >
    <Table/>
  </Resizable>

    
  )
}

export default Dashboard
