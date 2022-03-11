import React from 'react'
import { useLocation } from 'react-router-dom'

const Detailspage = () => {

    const location = useLocation();
    console.log(location);

  return (
    <div>
      <h1>hii</h1>
        This mobile is - {location.state.name} 
    </div>
  )
}

export default Detailspage