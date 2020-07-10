import React from 'react'
// import ResizePanel from "react-resize-panel";

import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
     
        <TheSidebar/>
   
      
      <div className="c-wrapper">
    

          <TheHeader/>
     

        <div className="c-body mx-0 my-0">
          <TheContent/>
        </div>

          <TheFooter/>

      </div>
    </div>
  )
}

export default TheLayout
