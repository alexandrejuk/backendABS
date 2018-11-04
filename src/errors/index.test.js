const HandleError = require('./')
const handleError = new HandleError()

describe('Error: test handle error', () => {
  
  it('should be an error instance', () => {
    expect(handleError instanceof HandleError).toBe(true)
  })

  it('should return an array of errors', () => {
    const errorData = "I'm a error"
    const errors = handleError.customError([errorData])

    expect(errors.length > 0).toBe(true)
  })


  it('should return an error', () => {
    const errorData = { type: "notNull Violation", path: 'some field'}
    const errorType = handleError.typeError(errorData)

    expect(errorType.type).toBe(errorData.type)
    expect(errorType.status).toBe(400)
  })
})