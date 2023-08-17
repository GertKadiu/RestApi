const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  Image: {
   type: String,
   require: false
  },
  email: {
   type: String,
   require: true
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Users", UserSchema);
