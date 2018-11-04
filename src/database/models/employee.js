const Sequelize = require('sequelize')

const Employee = (sequelize) => {
  const Employee = sequelize.define('employee', {
    firstName: {
      type: Sequelize.STRING,
      set(val) {
        this.setDataValue('firstName', val.toUpperCase());
      }  
    },
    lastName: {
      type: Sequelize.STRING,
      set(val) {
        this.setDataValue('lastName', val.toUpperCase());
      }  
    },
    participation: {
      type: Sequelize.INTEGER, 
    },
  })

  return Employee
}

module.exports = Employee