const { DataTypes } = require("sequelize");

const db = require("../config");

const Images = db.define(
  "Images",
  {
    name: {
      type: DataTypes.STRING,
      defaultValue: Date.now().toLocaleString(),
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Images;
