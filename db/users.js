import Sequelize from "sequelize";
import sequelize from "./db";

var users = sequelize.define("users", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  phone: Sequelize.INTEGER
});

export default users;
