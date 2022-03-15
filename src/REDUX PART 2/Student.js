import React from 'react'

const Student = ({ rollno, studentobj }) => {
    console.log(rollno, studentobj);
    const { name, country } = studentobj
    return (
        <div>

            {/* <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">STUDENT NAME</th>
                        <th scope="col">STUDENT COUNTRY</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">{rollno}</th>
                        <td>{name}</td>
                        <td>{country}</td>
                    </tr>
                </tbody>
            </table> */}

 <h3>{rollno} - {name} - {country}</h3>
        </div>
    )
}

export default Student