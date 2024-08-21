import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [marks, setMarks] = useState('');
    const [grade, setGrade] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/create', { name, email, marks, grade, city })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='container'>
            <div className='d-flex vh-100 justify-content-center align-items-center'>
                <div className='w-50 bg-secondary rounded-5 p-5'>
                    <form onSubmit={handleSubmit}>
                        <h2 className='d-flex justify-content-center my-3'>Add Student</h2>
                        <div>
                            <label><h4>Name</h4></label>
                            <input
                                type="text"
                                className='form-control'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label><h4>Email</h4></label>
                            <input
                                type="text"
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label><h4>Marks</h4></label>
                            <input
                                type="text"
                                className='form-control'
                                onChange={(e) => setMarks(e.target.value)}
                            />
                        </div>
                        <div>
                            <label><h4>Grade</h4></label>
                            <input
                                type="text"
                                className='form-control'
                                onChange={(e) => setGrade(e.target.value)}
                            />
                        </div>
                        <div>
                            <label><h4>City</h4></label>
                            <input
                                type="text"
                                className='form-control'
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <br></br>
                        <button className='btn btn-warning'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateStudent;