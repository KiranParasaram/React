import React from 'react'
import ComponentDidMount from './CompinentDidMount'

import Construct from './Construct'
import Getderived from './Getderived'
import LifecycleA from './LifecycleA'
import LifecycleB from './LifecycleB'
import LifecycleC from './LifecycleC'



const App = () => {
  return (
    <div>
      {/* <LifecycleA/>
      <LifecycleB/> */}
      {/* <Construct/> */}
      {/* <Getderived propsdataFromParent='getDerivedStateFromProps method'/> */}
      {/* <ComponentDidMount propsFromCDMparent="It is a CONstructor method"/> */}

    <LifecycleC/>
    </div>
  )
}

export default App
