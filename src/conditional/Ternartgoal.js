import React from 'react'

 function Goal(){
     return(
     <h1>Heyy Hurray Gooooooal</h1>
     )
 }

 function Nogoal(){

    return <h1>OHHHH NOOO !!!</h1>

  }

 
const Ternarygoal = (prop) => {
     let ternaryone = prop.isGoal

  return (
      <>
    <div>Ternarygoal</div>
     { ternaryone ?  <Goal/> : <Nogoal/> }
      </>

  )
}

export default Ternarygoal