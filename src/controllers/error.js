const HandleError = require('../errors')
const handleError = new HandleError()

const handlerErrorController = (err, req, res, next) => {
  const errors = handleError.customError(err.errors)
  res
    .status(400)
    .send({ errors: [errors] })
}

module.exports = handlerErrorController