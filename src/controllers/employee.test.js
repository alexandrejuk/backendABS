const app = require('../app')
const request = require('supertest')
const db = require('../database')

const url = '/api/v1/employees'

const employeeMock = { 
  firstName: 'Alexandre', 
  lastName: 'Santos', 
  participation: 40 
}

describe('controllers: test employee controller', () => {

  it('should return all employees', async () => {
    await request(app).post(url).send(employeeMock)
    await request(app).post(url).send(employeeMock)
    await request(app).post(url).send(employeeMock)

    const response = await request(app).get(url)

    expect(response.body.length > 0).toBeTruthy()
    expect(response.status).toBe(200)
  })

  it('should add a new employee', async () => {

    const { body: response } = await request(app).post(url).send(employeeMock)
    
    expect(response.id).toBeTruthy()
    expect(response.firstName).toBe(employeeMock.firstName.toUpperCase())
    expect(response.lastName).toBe(employeeMock.lastName.toUpperCase())
    expect(response.participation).toBe(employeeMock.participation)
    expect(response.createdAt).toBeTruthy()
    expect(response.updatedAt).toBeTruthy()
  })

  it('should return an employee', async () => {

    const { body: employee } = await request(app).post(url).send(employeeMock)
    const { body: response } = await request(app).get(`${url}/${employee.id}`)

    expect(response.id).toBe(employee.id)
    expect(response.firstName).toBe(employee.firstName)
    expect(response.lastName).toBe(employee.lastName)
    expect(response.participation).toBe(employee.participation)
    expect(response.createdAt).toBe(employee.createdAt)
    expect(response.updatedAt).toBe(employee.updatedAt)
  })


  it('should return a error 400 when add new employee without some fields', async () => {

    const { body: response } = await request(app).post(url).send({ firstName: 'alexandre' })

    expect(response.statusCode).toBe(400)
    expect(response.message).toBe('data base error!')
    expect(response.errors).toBeTruthy()
  })

})


