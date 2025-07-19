// const { default: employeeDetails } = require("../data/employeeData")
import { getEmployees } from "../controllers/employeeController.js"

const routes = (app) => {
    app.get('/employees',getEmployees)
}
export {routes}
