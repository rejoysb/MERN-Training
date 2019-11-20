const express = require("express");
const router = express.Router();

var users = [
  {
    id: 1,
    name: "user1",
    phone: 945678932
  },
  {
    id: 2,
    name: "user2",
    phone: 9567030913
  }
];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find(b => b.id == req.params.id);
  if (!user) return res.status(400).send("there is no user with the given id");
  res.send(user);
});

router.post("/", (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res.status(400).send("please add name and phone");
  }
  const newUser = { id: users.length + 1, name, phone };
  users.push(newUser);
  res.send(newUser);
});

router.delete("/:id", (req, res) => {
  const userIndex = users.findIndex(u => u.id == req.params.id);
  if (userIndex > -1) users.splice(userIndex, 1);
  return res.send("it was deleted");
});

module.exports = router;
