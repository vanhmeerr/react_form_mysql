const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express() // tool define, npm install express mysql cors axios nodemon@latest

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost', //run in local server
    user: 'root', //put your localhost username
    password: '', //put your root password
    database: 'student' //put your selescted database in mysql
})

app.get("/", (req, res) => {
    const sql = 'SELECT * FROM students' //selected table
    db.query(sql, (err, data) => {
        if (err) {
            res.json(err)
        } else {
            res.json(data) //force pull data from dtb
        }
    })
})

app.post("/create", (req, res) => {
    const sql = 'INSERT INTO students (name,email,marks,grade,city) VALUES (?)' // for new values in selected table
    const values = [ //make sure same with table header
        req.body.name,
        req.body.email,
        req.body.marks,
        req.body.grade,
        req.body.city
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            res.json(err)
        } else {
            res.json(data) //force push data from dtb
        }
    })
})

app.put('/update/:id', (req, res) => {
    const sql = 'UPDATE students SET name = ?, email = ?, marks, grade, city WHERE id = ?' // for update in selected table
    const values = [ //make sure same with table header
        req.body.name,
        req.body.email,
        req.body.marks,
        req.body.grade,
        req.body.city
    ]
    const id = req.params.id
    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            res.json(err)
        } else {
            res.json(data) // force update data from dtb
        }
    })
})

app.delete('/student/:id', (req, res) => {
    const sql = 'DELETE FROM students WHERE id = ?' // for delete data in table
    const id = req.params.id
    db.query(sql, [id], (err, data) => {
        if (err) {
            res.json(err)
        } else {
            res.json(data) // force delete data from dtb
        }
    })
})

app.listen(5000, () => {
    console.log('server is running on port 5000') // make sure server running
})