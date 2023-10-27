const axios = require("axios");
const { Dog, Temperament } = require("../db");

const getDogsById = async (idRaza) => {
  if(idRaza.toString().length > 3) {
    const dogDb = [
    await Dog.findByPk(idRaza, { include: { model: Temperament } }),
    ];
    const dogs = dogDb.map((dog) => {
      console.log(dogDb)
      return {
        name: dog.name,
        weight: dog.weight,
        height: dog.height,
        lifeSpan: dog.lifeSpan,
        temperament: dog.Temperament.map((element) => element.dataEvalues.name)
          .join(",")
          .trim(),
      };
    });
    return dogs[0];
  }
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`).data;

  return response;
};

module.exports = getDogsById;
