
const axios = require('axios');
const { Dog, Temperament } = require('../db');

const getDogsById = async (idRaza) => {
  if (idRaza.toString().length > 3) {
    //Busco BD
    const dogDb = await Dog.findOne({
      where: {
        id: idRaza
      },
      include: {
        model: Temperament,
        atributes: ["name"],
        through: {
          atributes: [],
        },
      },
    })
    const dog = {
      name: dogDb.name,
      weight: dogDb.weight,
      height: dogDb.height,
      life_span: dogDb.life_span,
      image: dogDb.image_url,
      temperament: dogDb.temperaments.map(element => element.dataValues.name).join(', ').trim()
    }

    return dog;
  }


  const getInfo = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`);
  const dogApiInfo = getInfo.data;
  return dogApiInfo
}
module.exports = getDogsById;
