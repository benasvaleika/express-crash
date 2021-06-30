import express from "express";
import usersList from "../../Users";
import { v4 } from "uuid";
const router = express.Router();

// Return all users
router.get("/", (req, res) => {
  res.send(usersList);
});

// Return single user
router.get("/:id", (req, res) => {
  const found = usersList.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json(usersList.filter((user) => user.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
});

// Create a new user
router.post("/", (req, res) => {
  const newUser = {
    id: v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ msg: "name or email not provided." });
  }

  usersList.push(newUser);
  res.json(usersList);
});

// Update user

module.exports = router;
