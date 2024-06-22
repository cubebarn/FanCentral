import React from 'react'

import { ThreeDCardDemo } from '../threed'

const GridDemo = () => {
  return (
    <div className="grid grid-cols-2 gap-2 justify-center items-center">
        <div><ThreeDCardDemo/></div>
        <div><ThreeDCardDemo/></div>
        
    </div>
  )
}

export default GridDemo