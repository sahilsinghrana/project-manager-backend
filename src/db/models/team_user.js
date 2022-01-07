const { DataTypes } = require("sequelize");
const db = require("../config");

const team_user = db.define(
  "team_user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },

  {
    indexes: [{ unique: true, fields: ["id"] }],
    timestamps: true,
    freezeTableName: true,
  }
);

// team_user.belongs;

// team_user.sync({ force: true });

module.exports = team_user;
