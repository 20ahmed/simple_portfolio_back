const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  firstTitle: {
    type: String,
    required: true,
  },
  secondTitle: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  resumeLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  querySelector: {
    type: String,
    default: "home",
    select: false,
  },
});

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
