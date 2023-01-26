const { Router } = require("express");

const {createVideoGameHandler ,
     getVideoGamesHandler ,
     getVideoGameHandler } = require('../handlers/videogameHandler')

//lo que viene de handlers lo importi

const videogameRoute = Router();

videogameRoute.get("/", getVideoGamesHandler );

videogameRoute.get("/:id",getVideoGameHandler);

videogameRoute.post("/",createVideoGameHandler);

module.exports = videogameRoute;

