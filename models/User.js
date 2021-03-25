const Sequelize = require("sequelize");
const db = require("../config/db");

const UserSchema = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  age: {
    type: Sequelize.INTEGER
  }
});

module.exports = UserSchema;