//IMPORTO LO QUE HAY EN CONTROLLERS
const {
    createVideoGame,
    getAllVideGames,
    searchVideoGameByName,
    getVideoGameById,
} = require('../controllers/videogameControl')



const getVideoGamesHandler = async (req, res) => {
    const { name } = req.query
    try {
        const result = name ? await searchVideoGameByName(name) : await getAllVideGames()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }

}

//debo de saber de que tipo de id estoy hablando num or uddid(string)
//puede que llegue una que no existe 
const getVideoGameHandler = async (req, res) => {
    const { id } = req.params

    try {

        const source = isNaN(id) ? 'bdd' : 'api'
        const videoGame = await getVideoGameById(id, source)
        res.status(200).send(videoGame)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createVideoGameHandler = async (req, res) => {
    const { name, description, relesed, rating, platforms, image, created, genres } = req.body
    //controller es esta funcion que me hace la logica y hace mas limpio mi code createVideogame()
    try {
        const NewGame = await createVideoGame(name, description, relesed, rating, platforms, image, created, genres)
        res.status(201).json("Video game created successfully");

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}



module.exports = { createVideoGameHandler, getVideoGamesHandler, getVideoGameHandler }
