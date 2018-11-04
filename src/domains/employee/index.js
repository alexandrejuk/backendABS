const db = require('../../database')
const EmployeeModel = db.model('employee')

class Employee {
  
  async add(employeeData) {
    return await EmployeeModel.create(employeeData)
  }
  
  async getAll() {
    return await EmployeeModel.findAll()
  }

  async getById(id) {
    return await EmployeeModel.findById(id)
  }
}

module.exports = Employee