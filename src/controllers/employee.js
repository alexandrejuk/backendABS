const EmployeeDomain = require('../domains/employee')
const employeeDomain = new EmployeeDomain()

const listEmployees = async (req, res, next) => {
 try {
    const employees = await employeeDomain.getAll()
    res.json(employees)
 } catch (error) {
    next(error)
 }
}

const listEmployeeById = async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const employee = await employeeDomain.getById(id)
    res.json(employee)
  } catch (error) {
    next(error)
  }
}

const addEmployee = async (req, res, next) => {
 try {
    const employeeData = req.body
    const employee = await employeeDomain.add(employeeData)
    res.json(employee)
 } catch (error) { 
    next(error)
 }
}

module.exports = {
  addEmployee,
  listEmployees,
  listEmployeeById,
}