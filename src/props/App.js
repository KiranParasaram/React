 import React from "react";
import ObjectProps from "./ObjectProps";

import Props from "./Props";

const propdata={

    component:"prop",
    message:"this is object type arguments(prop) to a component",
        
}

 function App(){
  
    return(
        <>
     <Props tupe="kiran" /> //props is like arguments ,props always passes like key-value pair,key name can be anyname 
     
     <ObjectProps data={propdata}/>

    
     </>
   
    )
}

export default App