const Poetry = require("../models/poetryModel");
const newPoetry = async (req, res) => {
  try {
    const { Poet, Data } = req.body;
    await Poetry.create({
      Poet,
      Data,
    });
    res.status(201).json({
      success: true,
      message: "Poetry created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "failed to create ",
      error: error.message,
    });
  }
};

const allpoetry = async (req, res) => {
  try {
    const newPoetry = await Poetry.find();
    res.json(newPoetry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { newPoetry, allpoetry };
