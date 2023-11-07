const { Dog, Temperament } = require("../db");

const createDog = async (name, height, weight, life_span, image_url, temperament) => {

  const dog = await Dog.create({
    name,
    height,
    weight,
    life_span,
    image_url,
  });
  temperament.forEach(async (temperament) => {
    const temperamento = await Temperament.findOne({ where: { name: temperament } });
    await dog.setTemperaments(temperamento);
  });

  return dog;
};

module.exports = createDog;
