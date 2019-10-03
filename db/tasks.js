import Sequelize from "sequelize";
import sequelize from "./db";

var tasks = sequelize.define("tasks", {
  task_name: { type: Sequelize.STRING, allowNull: false },
  task_description: Sequelize.STRING,
  user_id: Sequelize.INTEGER,
  status: {
    type: Sequelize.ENUM("PENDING", "COMPLETED", "DELETED"),
    defaultVale: "PENDING"
  }
});

export default tasks;
