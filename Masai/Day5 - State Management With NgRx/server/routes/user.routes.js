const express = require("express");
const { UserModel } = require("../models/user.model.js");
const userRouter = express.Router();

userRouter.get("/data", async (req, res) => {
  try {
    let users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    console.log("Error:", err);
  }
});

userRouter.get("/data/:id", async (req, res) => {
  try {
    let users = await UserModel.findById(req.params.id);
    res.status(200).json(users);
  } catch (err) {
    console.log("Error:", err);
  }
});

userRouter.post("/add", async (req, res) => {
  try {
    let user = new UserModel(req.body);
    await user.save();
    res.status(200).json({ message: `${user?.username} was added` });
  } catch (err) {
    console.log("Error:", err);
  }
});

userRouter.put("/edit", async (req, res) => {
  // let id = req.params.id;
  let updates = req.body;
  // console.log(id, updates);
  try {
    let user = await UserModel.findByIdAndUpdate(updates._id, updates);
    res.status(200).json({ message: `${user?.username} was updated` });
  } catch (err) {
    console.log("Error:", err);
  }
});

userRouter.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let user = await UserModel.findByIdAndDelete(id);
    res.status(200).json({ message: `${user?.username} was deleted` });
  } catch (err) {
    console.log("Error:", err);
  }
});

module.exports = {
  userRouter,
};
