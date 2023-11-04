require("dotenv").config();
const axios = require("axios");

const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;

const getDogs = async () => {
  const dogDb = await Dog.findAll({ include: { model: Temperament } });

  const newDogs = dogDb.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      weight: dog.weight,
      height: dog.height,
      life_span: dog.life_span,
      image: dog.image.url,
      temperament: dog.temperaments.map((element) => element.dataValues.name)
        .join(" , ")
        .trim(),
    };
  });

  const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
  const result = response.data;
  return newDogs.concat(result)
  
};

module.exports = getDogs;
