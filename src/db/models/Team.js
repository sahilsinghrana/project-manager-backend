const { DataTypes } = require("sequelize");
const db = require("../config");

const Team = db.define(
  "team",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

// Team.sync({ force: true });

module.exports = Team;
