const db = require("../config");

db.User = require("./User");
db.Project = require("./projects");

/**
 * --------------------Relationships---------
 */

// db.User.hasMany(db.Project);

db.Project.belongsTo(db.User, {
  foreignKey: {
    name: "createdBy",
    allowNull: false,
  },
});

module.exports = db;
