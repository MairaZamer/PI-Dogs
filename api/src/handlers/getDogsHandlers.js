const getDogs = require('../controllers/getDogs');

const getDogsHandlers = async(req, res) => {
    try {
        const dogs = await getDogs()
        res.status(200).json(dogs);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = getDogsHandlers;