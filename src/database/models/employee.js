const Sequelize = require('sequelize')

const Employee = (sequelize) => {
  const Employee = sequelize.define('employee', {
    firstName: {
      type: Sequelize.STRING,
      set(val) {
        this.setDataValue('firstName', val.toUpperCase());
      },
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      set(val) {
        this.setDataValue('lastName', val.toUpperCase());
      },
      allowNull: false
    },
    participation: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
  })

  return Employee
}

module.exports = Employee