const HandleError = require('./')
const Sequelize = require('sequelize')
const ValidationError = Sequelize.ValidationError

const handleError = new HandleError()

describe('Error: test handle error', () => {
  
  it('should be an error instance', () => {
    expect(handleError instanceof HandleError).toBe(true)
  })

  it('should return an error 500', () => {
    const errorData = new Error()
    const error = handleError.customError(errorData)
    expect(error.statusCode).toBe(500)
    expect(error.message).toBe('internal error!')
    expect(error.errors).toBeTruthy()
  })

  it('should return an error 400', () => {
    const errorData = new ValidationError()
    const error = handleError.customError(errorData)
    expect(error.statusCode).toBe(400)
    expect(error.message).toBe('data base error!')
    expect(error.errors).toBeTruthy()
  })
})