import React from 'react'

const Garage = ({carprop}) => {
  return (
      <>
    <div>Garage</div>
     {carprop.length < 4 && <h1>This is the conditional AND component in CONDITIONS</h1>}    // h1 is printed when before    condition is true .This type of stmts is only applicable in React     

                                     
     </>
  )
}

export default Garage