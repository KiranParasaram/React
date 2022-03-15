import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from './Action/studentAction'
import Student from './Student'

const AddStudent = () => {

    const [student, setStudent] = useState({ name: '', country: '' })
    const dispatch = useDispatch()

    const studentDataFromStore = useSelector((state) => state.studentReducer) // in state we get data from store.js


    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(student);

        const { name, country } = student
        if (name === '' || country === '') {
            alert('please enter details')
            return;
        }

        dispatch(addStudent(student))  //dispatch dispatches the addStudent() to readucer/It is connection b/w UI and Action

        setStudent({ name: '', country: '' })  //This line indicates  before leaving lets clear the input fields
    }


    return (
        <div>

            <h1>Add New Student</h1>

            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" name='name'
                    value={student.name}
                    onChange={(e) => setStudent({ ...student, name: e.target.value })}
                    placeholder='student name' />
                <br /><br />
                <label htmlFor="country">Country</label> <br />
                <input type="text" name='country'
                    value={student.country}
                    onChange={(e) => setStudent({ ...student, country: e.target.value })}
                    placeholder='country' />
                <br />
                <button type='submit'>ADD STUDENT</button>
            </form>


            {
                studentDataFromStore.map((loopstudent, index) =>
                    <Student key={index} rollno={index} studentobj={loopstudent} />
                )
            }

        </div>
    )
}

export default AddStudent