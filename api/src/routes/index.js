
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogsHandlers = require('../handlers/getDogsHandlers');
const getDogsByIdHandlers = require('../handlers/getDogsByIdHandlers');
const getDogsByNamehandlers = require('../handlers/getDogsByNameHandlers');
const createDogHandlers = require('../handlers/createDogHandlers');
const getTemperamentsHandlers = require('../handlers/getTemperamentHandlers');

const router = Router();

router.get("/dogs", getDogsHandlers);
router.get("/dogs/name", getDogsByNamehandlers);
router.get("/dogs/:idRaza", getDogsByIdHandlers);
router.post("/dogs", createDogHandlers);
router.get("/temperaments", getTemperamentsHandlers);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
