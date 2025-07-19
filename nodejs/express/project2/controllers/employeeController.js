//const employeeDetails = require('../data/employeeData');

import { employeeDetails } from '../data/employeeData.js'


//read
const getEmployees = (req,res) => {
    res.json(employeeDetails)
}

export {getEmployees}
