const { DataTypes } = require("sequelize");
const db = require("../config");

const Project = db.define(
  "project",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // For the sake of clarity we specify our indexes
    indexes: [{ unique: true, fields: ["id"] }],
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

Project.sync({ force: true });

module.exports = Project;
