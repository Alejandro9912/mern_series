const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  role: String,
  active: Boolean,
  avatar: String,
});


module.exports = mongoose.model("User", UserSchema);
