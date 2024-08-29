const Home = require("../models/homeModel");

exports.getHomeInfo = async (req, res) => {
  try {
    const home = await Home.find();
    res.status(200).json({
      status: "success",
      data: home,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createHomeInfo = async (req, res) => {
  try {
    const home = await Home.create(req.body);
    res.status(201).json({
      status: "success",
      data: home,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateHomeInfo = async (req, res) => {
  try {
    const id = await Home.findOne({ querySelector: "home" }).select("_id").lean();
    const home = await Home.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: home,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
