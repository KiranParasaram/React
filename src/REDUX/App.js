 import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreseCounter, incrementCounter } from "./Action/counterAction";
 
 export function App(){

    const myState = useSelector( (state)=> state.handleMyCounter ) // ****here in state we are getting whole state values which are stored in STORE****** //instead state we can write any variable 
     console.log(myState);

     const dispatch = useDispatch()
return(
     <div>
          
         <button onClick={ ()=>dispatch(incrementCounter()) }>PLUS</button>
         <input value={myState}/>
         <button onClick={ ()=>dispatch(decreseCounter()) }>MINUS</button> 

     </div>
     )
 }


 //dispatch will dispatch incrementcounter & decrementcounter action to reducer 
 //dispatch is linking between App.js & counterAction.js