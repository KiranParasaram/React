import React, { useContext } from 'react'
import { dataContext } from './StudentContext';

const StudentStatus = () => {

  const [val,setVal] = useContext(dataContext)

  console.log("idsusdhv");
  console.log(val);
  return (
    
    <div>
      <h1>Total students are : {val.length}</h1>
        <h2></h2>
           {/* This is student status component that used to show students status but it is not possible because this component wants to access data from StudentList component which is in same level with me ,we can done it by using TWO methods
           1.PROPS DRILLING   &   2.CONTEXT API  */}
    </div>
  )
}

export default StudentStatus