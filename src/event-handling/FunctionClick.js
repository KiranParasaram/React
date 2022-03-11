import React from 'react'



const FunctionClick = () => {

    function Clickhandler(){
        return(
            console.log("dbdjsdvkfdfsj")
            // <h1>This is function click</h1>
        )
    }
    
  return (
      <>
   <button onClick={ Clickhandler }>click</button>
  
      </>   
  )
}



export default FunctionClick