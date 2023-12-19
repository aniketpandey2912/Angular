const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    id: mongoose.Schema.ObjectId,
    username: String,
    usermail: String,
    usercity: String,
  },
  { versionKey: false }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
