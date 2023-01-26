const { Router } = require('express');
const videogameRoute = require('./videogameRoute')
const genresRoute = require('./genresRoute')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

mainRouter.use("/videogames", videogameRoute)
mainRouter.use("/genres", genresRoute) 



module.exports = mainRouter;
