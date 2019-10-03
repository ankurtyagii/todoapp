import express from "express"
import users from "../db/users"
import tasks from "../db/tasks"
import md5 from nodejs-md5

var router = express.Router();

router.post("/signup", async function(req, res) {
  const { email, name, password } = req.body;
  try {
    const user_data = await users.findOne({
      where: { email },
      raw: true
    });
    if (!user_data) {
      const data = await users.create({
        email: email,
        name: name,
        pass: password
      })

      return res.status(200).json({
        message: "User Created",
        id: data.id
      })
    } else {
      throw new Error("Email already exists")
    }
  } catch (error) {
    return res.status(201).json({ error: error.message });
  }
});

router.post("/login", async function(req, res) {
  const { email, password } = req.body
  try {
    const check_user = await users.findOne({
      where: { email, password },
      raw: true
    })

    if (!check_user) {
      throw new error("Invalid credentials");
    }

    const tasks_list = await tasks.findAll({
      where: {
        user_id: check_user.id
      }
    })
    return res.status(200).json({ tasks_list })
  } catch (error) {
    return res.status(201).json({ error: error.message })
  }
});

router.get("/task", async function(req, res) {
  const { user_id, status } = req.query

  try {
    const tasks_list = await tasks.findAll({
      where: {
        user_id,
        status
      }
    })

    return res.status(200).json({
      message: "Task List",
      data: tasks_list
    })
  } catch (error) {
    return res.status(201).json({ error: error.message })
  }
});

router.post("/task", async function(req, res) {
  const { name, description, user_id } = req.body

  try {
    const save_task = await tasks.create({
      task_name: name,
      task_description: description,
      user_id: user_id
    })

    return res.status(200).json({
      message: "Task is added",
      id: save_task.id
    })
  } catch (error) {
    return res.status(201).json({ error: error.message })
  }
});

router.put("/task", async function(req, res) {
  const { id, status } = req.body

  try {
    const save_task = await tasks.update(
      {
        status: status,
        updatedAt: new Date()
      },
      {
        where: { id }
      }
    )

    return res.status(200).json({
      message: "Task status is updated",
      id: save_task.id
    })
  } catch (error) {
    return res.status(201).json({ error: error.message })
  }
});
export default router;
