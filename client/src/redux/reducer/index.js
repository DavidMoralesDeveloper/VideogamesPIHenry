import {
    GET_VIDEOGAMES, 
    GET_BY_NAME, 
    GET_GAME_BY_ID, 
    GET_GENRES,
    FILTER_BY_GENRE
} from "../actions"

// reducer es una funcion que modifica el estado 
//recibe el estado que va a modificar y recibe la action que debe hacer 

const initialState= {
    videogames:[],
    videogamesFilters:[],
    videogameDetail:[],
    genres:[]
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_VIDEOGAMES:
          return {...state, videogames: action.payload}  
           //redux no modifica el estado , redux pisa el estado incorecto => (state.action = action.payload)
          //ya tengo mi estado global , cardContainers esta mirando a redux
        case GET_BY_NAME:
            return{...state, videogames: action.payload }
        case GET_GAME_BY_ID:
            return{...state,videogameDetail: action.payload}
        case GET_GENRES:
            return{...state,genres: action.payload}
        case FILTER_BY_GENRE:
            const allGames = state.videogamesFilters; //aca tb para el filtro desde todos
            const genresFiltered = action.payload === 'All' ? 
            state.videogames 
            : allGames.filter(el => {
                return el.genres.find(el => {
                    return el.name === action.payload;
                })     
            });
            return{...state,videogames: genresFiltered }
        default:
            return {...state}
    }

}

export default rootReducer