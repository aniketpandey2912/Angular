require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { connection } = require("./db.js");
const { userRouter } = require("./routes/user.routes.js");

const app = express();
const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Home Page" });
});

app.use("/users", userRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log("Server running at port", PORT);
  } catch (err) {
    console.log("Can't connect to DB", "Error:", err);
  }
});
