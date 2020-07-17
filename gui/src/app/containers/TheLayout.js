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
    
    <div>
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div id='myContent' className="c-body mx-0 my-0">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  )
}

export default TheLayout
