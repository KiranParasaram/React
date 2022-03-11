import React from 'react'

const ObjectProps = ({data}) => {
    console.log(data);
  return (
    <div>{data}</div>   //{} these braces are used to get dynamic value of data (i.e; value of data)
  )
}

export default ObjectProps