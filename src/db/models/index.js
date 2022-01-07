const db = require("../config");

const User = require("./User");
const Project = require("./Project");
const Team = require("./Team");
const team_user = require("./team_user");
const Images = require("./Images");
/**
 * --------------------Relationships---------
 */

// PROJECT

User.hasMany(Project, {
  foreignKey: {
    name: "createdBy",
    allowNull: false,
  },
});

Project.belongsTo(User, {
  foreignKey: {
    name: "createdBy",
    allowNull: false,
  },
});

// TEAM
Project.belongsTo(Team, {
  foreignKey: {
    name: "teamId",
  },
});

Team.hasMany(Project, {
  foreignKey: {
    name: "teamId",
  },
});

User.belongsToMany(Team, {
  through: team_user,
  uniqueKey: "id",
});

Team.belongsToMany(User, {
  through: team_user,
  uniqueKey: "id",
});

// Images

Images.belongsTo(User, { foreignKey: "uploadedBy" });
User.hasMany(Images, { foreignKey: "uploadedBy" });

Images.belongsTo(Project);
Project.hasMany(Images);

module.exports = db;
