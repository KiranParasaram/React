import React from 'react'
import ClickCounter from './ClickCounter'
import HoverComp from './HoverComp'
import UpdatedComponent from './UpdatedComponent'
import ParentComp from '../PureCompunent/ParentComp'

const App = () => {
  return (
    <div>

        {/* <ParentComp/> */}

        <ClickCounter/>
        <HoverComp/>

        {/* <UpdatedComponent/> */}
    </div>
  )
}

export default App