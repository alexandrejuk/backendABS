const Express = require('express')
const bodyParse = require('body-parser')
const cors = require('cors')
const handleError = require('./controllers/error')
const employeeRoute = require('./routes/employee')

const port = 3000
const app = Express()
const baseUrl = '/api/v1'

app.use(bodyParse.json())
app.use(cors())
app.use(baseUrl, employeeRoute)
app.use(handleError)

app.listen(port, () => console.log('API runinng on port: ', port))

module.exports = app