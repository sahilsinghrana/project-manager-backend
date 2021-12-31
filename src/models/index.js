const { sequelize } = require("../config/db");

module.exports = require("./User");

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
