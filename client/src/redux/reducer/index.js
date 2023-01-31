import {
    GET_VIDEOGAMES, 
    GET_BY_NAME, 
    GET_GAME_BY_ID, 
    GET_GENRES,
    FILTER_BY_GENRE,
    ORDER_BY_NAME
    
} from "../actions"

// reducer es una funcion que modifica el estado 
//recibe el estado que va a modificar y recibe la action que debe hacer 

const initialState= {
    videogames:[],
    videogamesFilters:[],
    videogameDetail:[],
    genres:[],
    names: []//deveria guardar lo que viene de get by name
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_VIDEOGAMES:
          return {...state,
             videogames: action.payload,
             videogamesFilters: action.payload}  
           //redux no modifica el estado , redux pisa el estado incorecto => (state.action = action.payload)
          //ya tengo mi estado global , cardContainers esta mirando a redux
        case GET_BY_NAME:
            return{...state, videogames: action.payload}

        case GET_GAME_BY_ID:
            return{...state,videogameDetail: action.payload}

        case GET_GENRES:
            return{...state,genres: action.payload}

        case FILTER_BY_GENRE:
            const allGames = state.videogamesFilters; 
           
            const genresFiltered = action.payload === 'genres' 
            ? allGames
            :  allGames.filter((game) =>game.genres.find(el => el === action.payload)) 
                     
            return{...state, videogames: genresFiltered }

            // case ORDER_BY_NAME: 
            // let sortName = action.payload ==='atoz'?
            // state.videogamesFilters.sort(function(a, b) {
            //     if (a.name > b.name) {
            //         return 1;
            //     }
            //     if (b.name > a.name) {
            //         return -1;
            //     }
            //     return 0;
            // }) 
            // :state.videogamesFilters.sort(function(a, b) {
            //     if (a.name > b.name) {
            //         return -1;
            //     }
            //     if (b.name > a.name) {
            //         return 1;
            //     }
            //     return 0;
            // })

            
            // return {
            //     ...state,
            //     videogamesFilters: sortName,
            // };

        default:
            return {...state}
    }

}

export default rootReducer