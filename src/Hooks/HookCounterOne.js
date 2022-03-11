import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent'

const HookCounterOne = () => {

      const [count,setCount] = useState(0)
      const [name,setName] = useState('')
      const [sign,setSign]  =useState('')
      const [toggle,setToggle] = useState(false)
      
      useEffect( ()=>{    // ***This is the only function to be called in MOUNTING, UPDATING and UNMOUNTING phases ,/useEffect invoked  in mounting + updating in every state *** 
        console.log('useEffect called in every state');
        } )

      useEffect( ()=>{             //useEffect function invoked in mounting + updating phase in count & sign states only
          console.log('useEffect called 1');
         document.title=`HookCount ${count} value`    
        },[count,sign] )  //****in useEffect function 1st parameter is a function and 2nd parameter is array of state values ,whenever these perticular states are changed then only useEffect function is called ****  
          
                
       useEffect( ()=>{  //  invokes only in mounting phase of every state
        alert('useEffect called only in updated phase');
        },[])    //***Empty Array represents that useEffect function to be invoked only mounting phase of all states but not in updating phase of states***
      

               const textchange=(e)=>{
                  // console.log('function');
                          setSign(e.target.value)
                }

  return (
    <div>
             {/* <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>

          <button onClick={ ()=>{setCount(count+1)} }>click {count}</button>
          

          <input type='text' value={sign} onChange={textchange}/> */}

       <div>
         <button onClick={()=>{setToggle( !toggle )}}>Show | Hide</button>
       </div>
          {
            toggle ? <ChildComponent/> : ''
          }


    </div>
  )
}

export default HookCounterOne