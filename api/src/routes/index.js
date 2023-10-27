
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogsHandlers = require('../handlers/getDogsHandlers');
const getDogsByIdHandlers = require('../handlers/getDogsByIdHandlers');
const getDogsByNamehandlres = require('../handlers/getDogsByNameHandlers');
const createDogHandlers = require('../handlers/createDogHandlers');
const getTemperamentsHandlers = require('../handlers/getTemperamentHandlers');

const router = Router();

router.get("/", getDogsHandlers);
router.get("/dogs/:idRaza", getDogsByIdHandlers);
router.get("/name", getDogsByNamehandlres);
router.post("/dogs", createDogHandlers);
router.get("/temperaments", getTemperamentsHandlers);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
