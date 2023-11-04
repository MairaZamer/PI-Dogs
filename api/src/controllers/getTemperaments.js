const axios = require('axios');
const { Temperament } = require('../db');

const getTemperaments = async() => {
    const tempApi = await axios.get(`https://api.thedogapi.com/v1/breeds`);
    const uniqueTemperaments = new Set();

    const temperamentInfo = tempApi?.data?.forEach(dog => 
    dog?.temperament?.split(',').forEach(temperament => uniqueTemperaments.add(temperament)
    ));
   
    
    const allTemperaments = [...uniqueTemperaments].map(temperament =>
        ({name: temperament}));

    const dogss = await Temperament.findAll()
    if(!dogss.length){
    Temperament.bulkCreate(allTemperaments)}

    return allTemperaments;
    };


module.exports = getTemperaments;