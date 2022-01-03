const db = require("./config");

require("./models");

db.sync();

module.exports = db;
