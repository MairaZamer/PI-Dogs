const axios = require('axios');
const { Dog, Temperament} = require('../db');

const getDogsByName = async(name) => {

    const dogDb = await Dog.findAll({
        include: {
            model: Temperament, 
            atributes: ["name"],
            through:{
                atributes: [],
            },
        },
    });

    const petision = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
    const dogApiInfo = petision.data;
    
    return dogDb.concat(dogApiInfo);
}

module.exports = getDogsByName;