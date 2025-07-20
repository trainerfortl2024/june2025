import { getEmployees,getEmployeeById,addEmployee,updateEmployee,deleteEmployee } from "../controllers/employeeController.js"

const routes = (app) => {
    app.get('/employee',getEmployees)
    app.get('/employee/:id',getEmployeeById)
    app.post('/employee',addEmployee)
    app.put('/employee/:id',updateEmployee)
    app.delete('/employee/:id',deleteEmployee)

}
export {routes}
