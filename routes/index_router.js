import express from "express";
import users from "../db/users";

var router = express.Router();

router.post("/signup", function(req, res) {
  const { email, name, password } = req.body;
  return users
    .findOne({
      where: { email },
      raw: true
    })
    .then(user_data => {
      console.log(user_data);
      if (!user_data) {
        users
          .create({
            email: email,
            name: name,
            password: password
          })
          .then(data => {
            res.status(200).json({
              message: "User Created",
              id: data.id
            });
          });
      } else {
        throw new Error("Email already exists");
      }
    })
    .catch(error => res.status(400).json({ error: error.message }));
});

export default router;
