const { DataTypes } = require("sequelize");

const sequelize = require("../Utils/db");

const Books = sequelize.define("Books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Books;
