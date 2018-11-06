const HandleError = require('../errors')
const handleError = new HandleError()

const handlerErrorController = (err, req, res, next) => {
  const error = handleError.customError(err)
  res
    .status(error.statusCode)
    .send(error)
}

module.exports = handlerErrorController