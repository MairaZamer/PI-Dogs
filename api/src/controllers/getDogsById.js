const axios = require("axios");
const { Dog, Temperament } = require("../db");

const getDogsById = async (idRaza) => {
  if (idRaza.toString().length > 3) {
    const dogDb = await Dog.findByPk(idRaza, { include: { model: Temperament } });
    if(dogDb){
      return dogDb
    }else{
      console.log('No existe perro con ese ID')
    }
  }
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`).data;

  return response;
};

module.exports = getDogsById;
