import React from 'react'

const Author = ({user}) => {
  let {name,handle} =user
  return (
    <div>
        <span>your name {name}</span>
        <span className='handle'>@kiran kumar {handle}</span>
    </div>
  )
}

export default Author