const { Dog, Temperament } = require("../db");

const createDog = async (name, height, weight, life_span, image, temperament) => {

  const response = await Dog.create({
    name,
    height,
    weight,
    life_span,
    image,
  });

  temperament.forEach(async (temperament) => {
    const temperamento = await Temperament.findOne({ where: { name: temperament } });
    await response.setTemperaments(temperamento);
  });

  return response;
};

module.exports = createDog;
