import React, { useContext, useState } from 'react'
import { dataContext } from './StudentContext'

const Addstudent = () => {

    const [AddStud,setAddstud]= useContext(dataContext)

     const [name,setName] = useState('')
     const [studentclass,setClass] = useState('')
     const [About,setAbout] = useState('')

     const clickhandle=()=>{
         console.log(name,studentclass,About,AddStud);

         let obj ={   //keys are according to studentList.js file
            id:AddStud.length,
             name:name,
             studclass:studentclass,
             info:About
         }

         setAddstud( [...AddStud,obj] )
        
     }

    return (
        <div className='d-flex justify-content-center'>

            <div className="jumbotron jumbotron-fluid  ">
                <div>
                    <h3>Name</h3>
                    <input type="text" name='name' value={name} onChange={ (e)=>setName(e.target.value) } />
                </div>

                <div>
                    <h3>Class</h3>
                    <input type="text" name='Class' value={studentclass} onChange={ (e)=>setClass(e.target.value) } />
                </div>

                <div>
                    <h3>Name</h3>
                    <textarea nam
                    e='About' value={About} onChange={ (e)=>setAbout(e.target.value) } />
                </div>
                <button className='btn btn-success w-100px' onClick={clickhandle}>Add student</button>
            </div>

        </div>
    )
}

export default Addstudent 