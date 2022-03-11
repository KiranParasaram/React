import React, { useState } from 'react'


export const HookCounter = (props) => {
    // const [count , setCount] = useState(0);
    // const [count2 , setCount2] = useState(1);
    console.log(props);

    const [greet,setGreet] = useState( "LogIN" )

    //  const change =()=>{
    //      setCount(count+1)
    //  }

    const changeString=()=>{
        setGreet("LogOUT")
    }

    return(
 
       <div>
           {/* <button onClick={change}>click Hook : {count}</button> */}
           {/* <button onClick={ ()=>setCount2(count2-1) }>click Hook2 : {count2}</button> */}

            {greet}
           <button onClick={changeString}> logout:</button>

           {props.children}  //recieving props from parent as ELEMENTS type
       </div>

    )
  
}