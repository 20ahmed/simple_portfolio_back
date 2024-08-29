const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  resumeLink: {
    type: String,
    required: true,
  },
  querySelector: {
    type: String,
    default: "about",
    select: false,
  },
});

const About = mongoose.model("About", aboutSchema);

module.exports = About;
