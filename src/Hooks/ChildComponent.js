import React, { useEffect } from 'react'

const ChildComponent = () => {

   useEffect( ()=>{
       console.log('mounting');
       return ()=>{ console.log('Now component is unmounted '); } //This return  function invokes at the time of unmounting only
   } ,[])

  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent