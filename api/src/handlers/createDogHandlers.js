const createDog = require("../controllers/createDog");

const createDogHandlers = async (req, res) => {
  try {
    const { name, height, weight, lifeSpan, image, temperament } = req.body;
    
    const dogs = await createDog(
      name,
      height,
      weight,
      lifeSpan,
      image,
      temperament
    );
    res.status(200).send(dogs);
    console.log(dogs)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createDogHandlers;