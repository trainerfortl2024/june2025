// const express = require('express')
import express from 'express';
import { employeeDetails } from './data/employees.js';
const app = express()

const mw1 = (req,res,next) => {
console.log(req.method)
next()
}
const mw2 = (req,res,next) => {
console.log(req.url)
next()
}

// app.use(mw1)


app.get('/',(req,res)=>{
res.send("Home page")
})

app.get('/about',mw2, (req,res) => {
    res.send("about page")
})

app.get('/contact', (req,res) => {
    res.send("contact page")
})

app.get('/employee', (req,res) => {
    const data = employeeDetails;
    res.json(data);
})

app.listen(4000, () => {
    console.log('server is running on http://localhost:4000')
})