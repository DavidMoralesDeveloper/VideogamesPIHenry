import axios from 'axios'

export const GET_VIDEOGAMES ='GET_VIDEOGAMES'
export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_GAME_BY_ID = 'GET_GAME_BY_ID'
export const GET_GENRES = 'GET_GENRES'
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_CREATE = 'ORDER_BY_CREATE'

//All
export const getGames = (dispatch) => {
    // si no puedo retornar una acction pura, retorno una funcion que si puede hacer una promesa
    return async function (dispatch) {
         
        const apiData = await axios.get("http://localhost:3001/videogames")         

        const videogames = apiData.data
        dispatch({type:GET_VIDEOGAMES, payload: videogames  })
    }

}
    //Query
export const searchByName = (name) =>{
    return async function (dispatch) {
         
        try {
            const apiData = await axios.get(`http://localhost:3001/videogames?name=${name}`)      

        const names  = apiData.data
        dispatch({type:GET_BY_NAME, payload: names })
        } catch (error) {
            console.log(error)
        }
    }
}

//Id

export const getGameById = (id) =>{
    return async function (dispatch) {
         
        const apiData = await axios.get(`http://localhost:3001/videogames/${id}`)      

        const videogames = apiData.data
        dispatch({type:GET_GAME_BY_ID, payload: videogames  })
    }
}

//Genres

export const getGenres = (dispatch)=> {

    return async function (dispatch) {
         
        const apiData = await axios.get("http://localhost:3001/genres")         

        const genres = apiData.data
        dispatch({type:GET_GENRES, payload: genres  })
    }
}

// Genres filter
export function filterVideogamesByGenre(payload) { //el payload es el value del input
    return  {
        type: FILTER_BY_GENRE,
        payload
    }
}

//alphabet
export function orderByName(payload) { 
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

//create
export function orderByCreate(payload) { 
    console.log(payload)
    return {
        type: ORDER_BY_CREATE,
        payload
    }
}