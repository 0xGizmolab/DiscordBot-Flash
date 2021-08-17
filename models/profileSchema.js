const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  wallet: { type: Number, default: 100 },
  bank: { type: Number },
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;