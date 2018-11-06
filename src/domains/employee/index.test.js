const Employee = require('./')
const employeeDomain = new Employee()
const db = require('../../database')

const employeeDataMock = {
  firstName: 'Alexandre',
  lastName: 'dos Santos Soares',
  participation: 40  
}

beforeEach(async () => {
  await db.model('employee').sync()
})

describe('Domain: employees', () => {

  it('should be an employee instance', () => {
    expect(employeeDomain instanceof Employee).toBe(true)
  })

  it('should add a new employee', async() => {
    const createdEmployee = await employeeDomain.add(employeeDataMock)
   
    expect(createdEmployee.id).toBeTruthy()
    expect(createdEmployee.firstName).toBe(employeeDataMock.firstName.toUpperCase())
    expect(createdEmployee.lastName).toBe(employeeDataMock.lastName.toUpperCase())
    expect(createdEmployee.participation).toBe(employeeDataMock.participation)
  })

  it('should return all employees', async () => {
    const employees = await employeeDomain.getAll()

    expect(employees.length > 0).toBe(true)
  })

  it('should return an employee', async () => {
    const { id } = await employeeDomain.add(employeeDataMock)
    const employee = await employeeDomain.getById(id)

    expect(employee.id).toBe(id)
    expect(employee.firstName).toBe(employeeDataMock.firstName.toUpperCase())
    expect(employee.lastName).toBe(employeeDataMock.lastName.toUpperCase())
    expect(employee.participation).toBe(employeeDataMock.participation)
  })
})