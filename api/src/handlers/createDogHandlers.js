const createDog = require("../controllers/createDog");

const createDogHandlers = async (req, res) => {
  try {
    const { name, height, weight, life_span, image_url, temperament } = req.body;

    const dogs = await createDog(
      name,
      height,
      weight,
      life_span,
      image_url,
      temperament
    );
    res.status(200).send(dogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createDogHandlers;
