require('dotenv').config()
const { API_KEY } = process.env
const { Genre } = require("../db");
const axios = require('axios')

const allGenres = async () => {

    const { data } = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genres = data.results;
  
    // Guardar los géneros en la base de datos
    genres.forEach(async (genre) => {
      const existingGenre = await Genre.findOne({ where: { name: genre.name } });
      // veo si existe mi genero si no creo uno nuevo 
      if(!existingGenre) await Genre.create({ name: genre.name });
    });
  
    // Obtener todos los géneros almacenados en la base de datos
    return (await Genre.findAll());
  };
module.exports ={allGenres}

