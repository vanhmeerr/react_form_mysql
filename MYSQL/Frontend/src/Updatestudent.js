import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


function Updatestudent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [marks, setMarks] = useState('')
    const [grade, setGrade] = useState('')
    const [city, setCity] = useState('')
    const { id } = useParams();
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        axios.put('http://localhost:5000/update/' + id, { name, email, marks, grade, city })
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='container'>
            <div className='d-flex vh-100 justify-content-center align-items-center'>
                <div className='w-50 bg-secondary rounded-5 p-5'>
                    <form onSubmit={handleSubmit}>
                        <h2 className='d-flex justify-content-center'>Update Student</h2>
                        <div className='mb-3'>
                            <label><h4>Name</h4></label>
                            <input
                                type='text'
                                className='form-control'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label><h4>Email</h4></label>
                            <input
                                type='text'
                                className='form-control'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label>Marks</label>
                            <input
                                type='text'
                                className='form-control'
                                value={marks}
                                onChange={(e) => setMarks(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label><h4>Grade</h4></label>
                            <input
                                type='text'
                                className='form-control'
                                value={grade}
                                onChange={(e) => setGrade(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label><h4>City</h4></label>
                            <input
                                type='text'
                                className='form-control'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Update</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Updatestudent