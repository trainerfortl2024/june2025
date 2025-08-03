const bodyParser = require('body-parser');
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express();
app.use(bodyParser.json())
app.use(cors())
//db connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mydb'
})

db.connect((err) => {
    if(err){
        console.log('Error connecting db'+err)
    }
    console.log('connected to mysql with id '+db.threadId);
})


app.get('/employee', (req,res)=>{
    const sql = 'select * from employee'
    db.query(sql,(err,result)=>{
        if(err){
            return res.status(500).send('Error retrieving employees');
        }
        res.json(result)
    })
})

app.post('/employee',(req,res) => {
    const {name,salary} = req.body;
    const sql = 'insert into employee(name,salary) values(?,?)'; 
    db.query(sql,[name,salary],(err,results) => {
        if(err){
            return res.status(500).send('Error - adding new employee')
        }
        return res.status(201).send('Employee added')
    })
})


app.get('/hello',(req,res) => {
    res.send('Hello EMS...')
})


app.listen(4000,()=>{
    console.log('server started and listening http://localhost:4000/')
})