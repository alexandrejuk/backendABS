const Sequelize = require('sequelize')
const DataBaseError = Sequelize.Error
const ValidationError = Sequelize.ValidationError

class HandleError {
  customError(error) {
    if(error instanceof ValidationError) {
      return {
        statusCode: 400,
        message: 'data base error!',
        errors: error.errors.map(this.typeValidationError)
      }
    }

    if(error instanceof DataBaseError) {
      return {
        statusCode: 400,
        message: 'data base error!',
        errors: [this.typeDataBaseError()]
      }
    }

    return {
      statusCode: 500,
      message: 'internal error!',
      errors: []
    }
  }

  typeValidationError(error) {
    return ({
      type: error.type,
      messageError: `the field ${error.path} is required and cannot be null!`
    })
  }

  typeDataBaseError() {
    return ({
      type: 'internal error',
      messageError: `internal error on database!`
    })
  }

}

module.exports = HandleError