//const employeeDetails = require('../data/employeeData');

import { employeeDetails } from '../data/employeeData.js'


//read
const getEmployees = (req,res) => {
    res.json(employeeDetails)
}

const getEmployeeById = (req,res) => {
    const id = parseInt(req.params.id);
    const employee = employeeDetails.find( emp => emp.id === id ) 
    if(employee){
    res.json(employee)
    }
    else{
        res.status(404).json({message:'Employee not found'})
    }
}

const addEmployee = (req,res) => {
    const newId = employeeDetails.length + 1

    const newEmployee = {
        id:newId,
        name:req.body.name,
        salary:req.body.salary
    }
    employeeDetails.push(newEmployee);
    res.status(201).json(newEmployee)
}

const updateEmployee = (req,res) => {


}


export {getEmployees,getEmployeeById,addEmployee}
