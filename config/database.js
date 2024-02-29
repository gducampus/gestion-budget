const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('budget', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;