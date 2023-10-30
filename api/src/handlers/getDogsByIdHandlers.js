const getDogsById = require("../controllers/getDogsById");

const getDogsByIdHandlers = async (req, res) => {
  try {
    const { idRaza } = req.params;
    const dogs = await getDogsById(idRaza);
    res.status(200).json(dogs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getDogsByIdHandlers;
