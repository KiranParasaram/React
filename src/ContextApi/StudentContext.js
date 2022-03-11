
import React, { createContext,useState } from "react";
import StudentList from "./StudentList";
import StudentStatus from "./StudentStatus";

export const dataContext = createContext()

export const StudentContext=( props )=>{

    const [students,setStudents] = useState( [
        // {name:'kiran',studclass:'X',info:'he is expert in web developing'},
        // {name:'kumar', studclass:'XI',info:'lkjdhlhzdlkchdkhchcz'},
        // {name:'xyz',studclass:'XII',info:'lkkcvcnv nc jjczxkjn jjn  dsnvlkds c'},
       
    ] )

   return(

         <dataContext.Provider value={ [students,setStudents] }>   //when there is multiple values to send then wrap them in sq brackets 
           
             {props.children}        // ****Here we are recieving components from APP.js file ,/Then after again send updated   components to APP.js file using props****

         </dataContext.Provider>

   )
    

}