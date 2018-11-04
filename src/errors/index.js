class HandleError {
  customError(errors) {
    return errors.map(this.typeError)
  }

  typeError(error) {
    if(error.type === 'notNull Violation') {
      return ({
        status: 400,
        type: error.type,
        messageError: `the field ${error.path} is required and cannot be null!`
      })
    }
    return error
  }

}

module.exports = HandleError