import React,{useState} from "react";
import Addstudent from "./Addstudent";
import Assign4 from "./Assign4";
import { StudentContext } from "./StudentContext";
import StudentList from "./StudentList";
import Studentshow from "./Studentshow";
import StudentStatus from "./StudentStatus";
import  ClassCounter  from "../Hooks/ClassCounter";
import ClassCounterOne from "../Hooks/ClassCounterOne";

import { HookCounter } from "../Hooks/HookCounter";
import { HookCounterForm } from "../Hooks/HookCounterForm";
import HookCounterOne from "../Hooks/HookCounterOne";
import HookPassingArrays from "../Hooks/HookPassingArrays";


const App=()=>{

   

    return(
        <div>
      
        {/* <ClassCounter/> */}

         {/* <HookCounter>
             <h1>This is a another type of sending props</h1>
              <h2>Kiran Kumar</h2>
         </HookCounter> */}

         {/* <HookCounterForm/> */}
         {/* <HookPassingArrays/> */}
         {/* <ClassCounterOne/> */}
         {/* <HookCounterOne/> */}

         <StudentContext>      //here we are sending child components to a StudentContext component which has context in it 
             
              <StudentStatus /> <br /><br />
              <Addstudent/>  <br /><br />
              <StudentList /> 
             
         </StudentContext> 
        
        
         {/* <Assign4/> */}
       </div>
    )
}

export default App