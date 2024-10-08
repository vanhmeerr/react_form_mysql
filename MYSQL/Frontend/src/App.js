import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateStudent from './CreateStudent'
import Student from './Student'
import UpdateStudent from './Updatestudent'

function App() {
  return (
    <div>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Student />} />
            <Route path="/create" element={<CreateStudent />} />
            <Route path="/update/:id" element={<UpdateStudent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App