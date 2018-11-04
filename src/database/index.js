
const Sequelize = require('sequelize')
const EmployeeModel = require('./models/employee')

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

EmployeeModel(sequelize)

module.exports = sequelize