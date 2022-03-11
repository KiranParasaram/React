import React, { useState } from 'react'

export const HookCounterForm = () => {

    const [name,setName]=useState( {firstname: '' , lastname: '' } )

    const lastnameChange=(e)=>{
        setName({ ...name,lastname: e.target.value })  //*** */...name is used to preserve the previous values in name  //and lastname overrides the previous lastname only****
        
    }


  return (
    <div>
         <h1>{ JSON.stringify(name) }</h1>
         {name.firstname}

       <form action="">
           <input type="text" value={name.firstname} onChange={ (e)=>setName({ ...name,firstname:e.target.value }) }/>
           <input type="text" value={name.lastname} onChange={ lastnameChange }/>
       </form>

         {name.lastname} 
    </div>
  )
}
