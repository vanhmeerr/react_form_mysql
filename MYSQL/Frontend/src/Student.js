import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Student() {

    const [students, setStudent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then(res => setStudent(res.data))
            .catch(err => console.log(err))
    }, [])

    const handledelete = async (id) => {
        try {
            await axios.delete('http://localhost:5000/student/' + id) // Send DELETE request to the server with the student ID
            window.location.reload() // Reload the page to reflect the changes
        }
        catch (error) {
            console.log(error) // Log any errors that occur during the deletion
        }
    }

    return (
        <div className='container'>
            <div className='d-flex vh-100 justify-content-center align-items-center'>
                <div className='w-50 bg-secondary rounded-5 p-5'>
                    <h2 className='d-flex justify-content-center'>Student Data</h2>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Marks</th>
                                <th>Grade</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student) => (
                                    <tr>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.marks}</td>
                                        <td>{student.grade}</td>
                                        <td>{student.city}</td>
                                        <td>
                                            <Link to={`update/${student.id}`} className='btn btn-primary'>update</Link>
                                            <button className='btn btn-danger ms-2' onClick={(e) => handledelete(student.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <Link to={'/create'} className='btn btn-primary'>Add</Link>
                </div>
            </div>
        </div>
    )
}

export default Student