import Sequelize from "sequelize";

const sequelize = new Sequelize("test", "root", "Qwerty@123", {
  host: "localhost",
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
