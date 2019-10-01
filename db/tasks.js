import Sequelize from "sequelize";
import sequelize from "./db";

var tasks = sequelize.define("tasks", {
  task_name: { type: Sequelize.STRING, allowNull: false },
  task_description: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM("PENDING", "COMPLETED", "DELETED"),
    defaultVale: "PENDING"
  }
});

export default tasks;
