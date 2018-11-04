const Express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const HandleError = require('./errors')
const handleError = new HandleError()
const port = 3000
const app = Express()
const baseUrl = '/api/v1'

const employeeRoute = require('./routes/employee')

app.use(bodyParse.json())
app.use(cors())
app.use(baseUrl, employeeRoute)

app.use((err, req, res, next) => {
  const errors = handleError.customError(err.errors)
  res
    .status(400)
    .send({ errors: [errors] })
})

app.listen(port, () => console.log('API runinng on port: ', port))

module.exports = app