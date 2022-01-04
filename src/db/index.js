const db = require("./models/index");

db.sync();

module.exports = db;
