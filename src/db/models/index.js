const db = require("../config");

db.User = require("./User");
db.Project = require("./projects");

/**
 * --------------------Relationships---------
 */

db.User.hasMany(db.Project);

db.Project.belongsTo(db.User);

module.exports = db;
