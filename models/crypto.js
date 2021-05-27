const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Crypto = mongoose.model("Crypto", cryptoSchema);

module.exports = Crypto;