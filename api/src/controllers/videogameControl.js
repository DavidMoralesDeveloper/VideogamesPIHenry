require('dotenv').config()
const { API_KEY } = process.env
const { Videogame, Genre } = require("../db");
const axios = require('axios')

const createVideoGame = async (name, description, relesed, rating, platforms, image, created, genres) => {
  const genresDb = await Genre.findAll({
    where: {
      name: genres
    }
  });
  const newGame = await Videogame.create({
    name,
    description,
    relesed,
    rating: rating || 0,
    platforms,
    image: image || 'https://static.vecteezy.com/system/resources/previews/002/293/504/non_2x/video-games-neon-sign-vector.jpg',
    created,
    genres
  });
  return newGame.addGenre(genresDb)
};

//create, viene de sequelize es un modelo 
//retorna una promeza por que demora un tiempo en resolverse

const getAllVideGames = async () => {
 
  const DBvideogames = await Videogame.findAll({
    attributes: ['name','image','id' ,],
    include: [{ model: Genre, attributes: ['name'], through: {
      attributes: [],
    }, }]  
}) //bdd
const gamesDB = DBvideogames.map((game) => {
  return {
    id: game.id,
    name: game.name,
    image: game.image,
    genres: game.genres?.map(el => el.name),
  }
})


  let pages = 0;//cada pagina trae 20 games , itero el while 5 veces 
  let results = [...gamesDB]; //sumo lo que tengo en la DB
  let apiVideogames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
  while (pages < 5) {
    pages++;
    //filtro solo la DATA que necesito enviar al FRONT
    const apiGames = apiVideogames.data.results.map(game => {
      return {
        id: game.id,
        image: game.background_image,
        name: game.name,
        genres: game.genres.map(el => el.name),
      }
    });
    results = [...results, ...apiGames]
    apiVideogames = await axios.get(apiVideogames.data.next) //vuelvo a llamar a la API con next
  }
  return results
}


const searchVideoGameByName = async (name) => {
  const DBvideogames = await Videogame.findAll({ where: { name: name } });

  let gamesData = [...DBvideogames];

  const apiVideogames = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
  apiVideogames.data.results.forEach(game => {
    if (gamesData.length <= 14) {
      gamesData.push({
        //Solo lo que me pide mi ruta principan
        image: game.background_image,
        name: game.name,
        genres: game.genres.map(el => el.name),
        created: false

      })
    }
  })
  if (gamesData.length) return gamesData
  else throw Error('no existe de tal video juego revise bien el nombre ')

  // const results = gamesData.length ? gamesData : throw Error('no existe de tal video juego revise bien el nombre ')
  //no puedo usar ES6 con throw error

}

const getVideoGameById = async (id, source) => {

  if (source === 'api') {
    const apiVideogames = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data

    const apiGame = {
      name: apiVideogames.name,
      image: apiVideogames.background_image,
      genres: apiVideogames.genres.map(el => el.name),
      // Ruta de detalle de videojuego
      description: apiVideogames.description,
      released: apiVideogames.released,
      rating: apiVideogames.rating.toFixed(2),
      platforms: apiVideogames.platforms.map(p => p.platform.name),
      created: false
    }

    return apiGame
  } else {
     const dataDB = (await Videogame.findByPk(id,  {
      attributes: ['id', 'name', 'image', 'description', 'released', 'rating', 'platforms'],
      include: [{ model: Genre, attributes: ['name'], through: { attributes: [] } }]
    }));
    return {
      id: dataDB.id,
      name: dataDB.name,
      image: dataDB.image,
      description: dataDB.description,
      released: dataDB.released,
      rating: dataDB.rating,
      platforms: dataDB.platforms,
      genres: dataDB.genres?.map(el => el.name),
    }
  }


  // const game = source === 'api'
  //   ?  (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data
  //   : await Videogame.findByPk(id, { include: { model: Genre } });
  // return game;
};



module.exports = { createVideoGame, getVideoGameById, searchVideoGameByName, getAllVideGames }

