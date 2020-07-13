import React from 'react'
import { CFooter } from '@coreui/react'

const footer ={
  height:'20px'
}

const TheFooter = () => {
  return (
    <CFooter fixed={true} style ={footer} >
      <div>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
