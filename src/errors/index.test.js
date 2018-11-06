const HandleError = require('./')
const Sequelize = require('sequelize')
const ValidationError = Sequelize.ValidationError
const DataBaseError = Sequelize.Error

const handleError = new HandleError()
const errorData = new Error()
const errorValidation = new ValidationError()
const dataBaseError = new DataBaseError()

describe('Error: test handle error', () => {
  
  it('should be an error instance', () => {
    expect(handleError instanceof HandleError).toBe(true)
  })

  it('should return an error 500', () => {
    const error = handleError.customError(errorData)
    expect(error.statusCode).toBe(500)
    expect(error.message).toBe('internal error!')
    expect(error.errors).toBeTruthy()
  })

  it('should return an error 400', () => {
    const error = handleError.customError(errorValidation)
    expect(error.statusCode).toBe(400)
    expect(error.message).toBe('data base error!')
    expect(error.errors).toBeTruthy()
  })

  it('should return an error 400', () => {
    const error = handleError.customError(dataBaseError)
    expect(error.statusCode).toBe(400)
    expect(error.message).toBe('data base error!')
    expect(error.errors.length > 0).toBeTruthy()
  })
})