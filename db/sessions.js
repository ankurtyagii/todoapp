import Sequelize from "sequelize";
import sequelize from "./db";

var sessions = sequelize.define("sessions", {
  user_id: Sequelize.INTEGER,
  token: Sequelize.STRING
});

export default sessions;
