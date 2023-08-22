const { DataTypes } = require("sequelize");

const sequelize = require("../Utils/db"); // importing database configuration



// Defining the table and its type
const Books = sequelize.define("Books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Books;
