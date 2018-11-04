const route = require('express').Router()
const EmployeeController = require('../controllers/employee')

route.get('/employees', EmployeeController.listEmployees)
route.get('/employees/:id', EmployeeController.listEmployeeById)
route.post('/employees', EmployeeController.addEmployee)

module.exports = route