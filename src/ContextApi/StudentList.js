import React, { useContext, useState } from 'react'
import { dataContext } from './StudentContext'
import Studentshow from './Studentshow'

const StudentList = () => {

      const [anything,setAnything]  = useContext(dataContext)
      console.log(anything);

      const deleteStudent = (ind) =>{

        console.log(ind);
        let tempArr=[]
        anything.map( (student)=> (ind == student.id) ?  ''  : tempArr.push(student)  )
        setAnything(tempArr)

      }
  
  return (
    <div className='d-flex justify-content-around'>
 
       { anything.map( (student,index)=>
              <Studentshow key={index} index={student.id} deleteStud={deleteStudent} name={student.name} studclass={student.studclass} information={student.info}/>
         )}

         

    </div>
  )
}

export default StudentList