const express = require('express');
const rotuer = express.Router();
const User = require('../model/User')


rotuer.get("/", async (req, res) => {
  // Find() =? Get all data
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create and Save a post

rotuer.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    image: req.body.image,
    email: req.body.email
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get A specific post by id

rotuer.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a specific post by Id

rotuer.patch("/:userId", async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          name: req.body.name,
          age: req.body.age,
          image: req.body.image,
          email: req.body.email,
        },
      }
    );
    res.json(updateUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete() => Delete a post by Id

rotuer.delete("/:userId", async (req, res) => {
  try {
    const removeUser = await User.deleteOne({ _id: req.params.userId });
    res.json(removeUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = rotuer;