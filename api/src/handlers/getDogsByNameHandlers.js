const getDogsByName = require("../controllers/getDogsByName");

const getDogsByNameHandlers = async (req, res) => {
  try {
    const { name } = req.query;
    const dogs = await getDogsByName(name);
    res.status(200).json(dogs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDogsByNameHandlers;
