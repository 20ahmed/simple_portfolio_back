const About = require("../models/aboutModel");

exports.getAboutInfo = async (req, res) => {
  try {
    const about = await About.find();
    res.status(200).json({
      status: "success",
      data: about,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createAboutInfo = async (req, res) => {
  try {
    const about = await About.create(req.body);
    res.status(201).json({
      status: "success",
      data: about,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateAboutInfo = async (req, res) => {
  try {
    const id = await About.findOne({ querySelector: "about" }).select("_id").lean();
    const about = await About.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: about,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
