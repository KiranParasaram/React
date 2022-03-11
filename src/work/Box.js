import React from 'react'
import Heading from './Heading'
import Text from './Text'
import './index.css' //we can use .css file in App.js or Box.js



const Box = ({matter}) => {
  return (
    <div className='box'>
        <Heading main={matter.head}/>
        <Text remain={matter.para}/>
    </div>
  )
}

export default Box