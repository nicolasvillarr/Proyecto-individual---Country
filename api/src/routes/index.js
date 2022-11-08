const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerPais = require ('./countries')
const  actividad  = require ('./activities')
const getActividad = require('./getActivities')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/country', routerPais)
router.use('/activity', actividad )
router.use('/getActivity', getActividad)
module.exports = router;
