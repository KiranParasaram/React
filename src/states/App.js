import React from 'react'
import {Messi} from './Message'

const App = () => {

  const propingObj={
    name:'kumar'
  }

  return (
    <div>
      App
      <Messi Sentprop={propingObj.name}/>
    </div>
  )
}

export default App 
