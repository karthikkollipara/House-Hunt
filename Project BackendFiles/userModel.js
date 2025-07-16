const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    set: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  type: {
    type: String,
    required: [true, "type is required"], // e.g. "Owner" or "Renter"
  },
  granted: {
    type: String,
    default: function () {
      return this.type === "Owner" ? "granted" : "granted";
      // or return "ungranted" for renters if needed
    }
  }
}, {
  strict: false,
});

const userSchema = mongoose.model("user", userModel);

module.exports = userSchema;
