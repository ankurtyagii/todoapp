import express from "express";
import users from "../db/users";
import tasks from "../db/tasks";
var md5 = require("nodejs-md5");

var router = express.Router();

router.post("/signup", async function(req, res) {
  const { email, name, password } = req.body;
  try {
    const user_data = await users.findOne({
      where: { email },
      raw: true
    });
    if (!user_data) {
      var pass;
      await md5.string(password, function(err, md5) {
        console.log(md5);
        pass = md5;
      });
      console.log(pass);
      console.log(password);
      return false;
      const data = await users.create({
        email: email,
        name: name,
        pass: password
      });

      return res.status(200).json({
        message: "User Created",
        id: data.id
      });
    } else {
      throw new Error("Email already exists");
    }
  } catch (error) {
    return res.status(201).json({ error: error.message });
  }
});

router.post("/login", async function(req, res) {
  const { email, password } = req.body;
  try {
    var pass;
    await md5.string(password, function(err, md5) {
      pass = md5;
    });
    const check_user = await users.findOne({
      where: { email, pass },
      raw: true
    });

    if (!check_user) {
      throw new error("Invalid credentials");
    }

    tasks_list = await tasks.findAll({
      where: {
        user_id: check_user.id
      }
    });
    console.log(tasks_list);
    return false;
    return res.status(200).json({ tasks_list });
  } catch (error) {
    return res.status(201).json({ error: error.message });
  }
});

export default router;
