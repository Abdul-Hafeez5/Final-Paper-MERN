const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const schema = new Schema({
  Poet: {
    type: String,
    required: true,
  },
  Data: {
    type: String,
    required: true,
  },
});

module.exports = model("Poetry", schema);
