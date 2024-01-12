const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  albumart: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  artist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
    },
  ],
});

module.exports = mongoose.model("Song", songSchema);
