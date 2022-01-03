const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pogz", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
  logging: console.log,
});

module.exports = sequelize;
