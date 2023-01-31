import {
    GET_VIDEOGAMES,
    GET_BY_NAME,
    GET_GAME_BY_ID,
    GET_GENRES,
    FILTER_BY_GENRE,
    ORDER_BY_NAME,
    ORDER_BY_CREATE

} from "../actions"

// reducer es una funcion que modifica el estado 
//recibe el estado que va a modificar y recibe la action que debe hacer 

const initialState = {
    videogames: [],
    videogamesFilters: [],//me guarda un arreglo entero al que puedo volver.
    videogameDetail: [],
    genres: [],
    names: []//deveria guardar lo que viene de get by name
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                videogamesFilters: action.payload
            }
        //redux no modifica el estado , redux pisa el estado incorecto => (state.action = action.payload)
        //ya tengo mi estado global , cardContainers esta mirando a redux
        case GET_BY_NAME:
            return { ...state, videogames: action.payload }

        case GET_GAME_BY_ID:
            return { ...state, videogameDetail: action.payload }

        case GET_GENRES:
            return { ...state, genres: action.payload }

        case FILTER_BY_GENRE:
            const allGames = state.videogamesFilters;//aca una copia de todos mis datos

            const genresFiltered = action.payload === 'genres'
                ? allGames
                : allGames.filter((game) => game.genres.find(el => el === action.payload))

            return { ...state, videogames: genresFiltered } //modifico este estado , y arriba queda intacto por si vuelvo

        case ORDER_BY_NAME:
            const allGames3 = state.videogamesFilters
            let orderList = state.videogames.sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                return 0
            })
            // const nameFiltered = action.payload === 'alphabet' && allGames
            const nameFilter = action.payload === 'atoz'
            ? orderList
            :orderList = orderList.reverse() 
            
            console.log(orderList)
            return {
                ...state,
                videogames: action.payload ==='alphabet'
                ?allGames3
                :nameFilter
            }

        case ORDER_BY_CREATE:
            const allGames2 = state.videogamesFilters
            const createFilter = action.payload === 'created'
            ?allGames2.filter(creat => creat.create === true)
            :allGames2.filter(creat => creat.create === false)

        return{
            ...state,
            videogames : action.payload === 'all' 
            ?allGames2 
            :createFilter
        }

        default:
            return { ...state }
    }

}

export default rootReducer