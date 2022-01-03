const { DataTypes } = require("sequelize");
const db = require("../config");

const User = db.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "First Name cannot be empty",
        },
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Last Name cannot be empty",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email cannot be empty",
        },
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password cannot be empty",
        },
      },
    },
    token: {
      type: DataTypes.STRING,
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

User.sync();

module.exports = User;
