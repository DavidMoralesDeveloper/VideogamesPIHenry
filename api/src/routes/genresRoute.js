const { Router } = require("express");
const {genresHandler} = require('../handlers/genreHandlers')

const genresRoute = Router();


genresRoute.get("/", genresHandler );

module.exports = genresRoute;