import Sequelize from "sequelize";
import sequelize from "./db";

var users = sequelize.define("users", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  phone: Sequelize.INTEGER,
  profile_pic: Sequelize.STRING,
  address: Sequelize.STRING
});

export default users;
