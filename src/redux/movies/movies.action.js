import axios from "axios"
import { BASE_URI_BACKEND } from "../../util/api"

export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST'
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS'
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE'


export const ADD_MOVIES_REQUEST = 'ADD_MOVIES_REQUEST'
export const ADD_MOVIES_SUCCESS = 'ADD_MOVIES_SUCCESS'
export const ADD_MOVIES_FAILURE = 'ADD_MOVIES_FAILURE'


export const GET_WATCHLIST_REQUEST = 'GET_WATCHLIST_REQUEST'
export const GET_WATCHLIST_SUCCESS = 'GET_WATCHLIST_SUCCESS'
export const GET_WATCHLIST_FAILURE = 'GET_WATCHLIST_FAILURE'

export const REMOVE_WATCHLIST_REQUEST = 'REMOVE_WATCHLIST_REQUEST'
export const REMOVE_WATCHLIST_SUCCESS = 'REMOVE_WATCHLIST_SUCCESS'
export const REMOVE_WATCHLIST_FAILURE = 'REMOVE_WATCHLIST_FAILURE'


export const searchMovies = (movieName) => {
    return async(dispatch) => {
        try{
            dispatch({type : SEARCH_MOVIES_REQUEST})
            let url = `https://www.omdbapi.com/?s=${movieName}&apikey=1aaacefd`
            let response = await (await fetch(url)).json();
            dispatch({type : SEARCH_MOVIES_SUCCESS , payload : response});
            // console.log(response.Search, "Response");
        }
        catch(error){
            dispatch({type : SEARCH_MOVIES_FAILURE , payload : error.response.data});
        }

    }
}

export const addWatchList = (movieName) => {
    return async(dispatch) => {
        try{
            dispatch({type : ADD_MOVIES_REQUEST})
            let url = `${BASE_URI_BACKEND}/api/users/watchlist`
            let response = await axios.post(url, movieName);
            dispatch({type : ADD_MOVIES_SUCCESS , payload : response});
            // console.log(response.Search, "Response");
        }
        catch(error){
            dispatch({type : ADD_MOVIES_FAILURE , payload : error.response.data});
        }

    }
}



export const getWatchList = () => {
    return async(dispatch) => {
        try{
            dispatch({type : GET_WATCHLIST_REQUEST})
            let url = `${BASE_URI_BACKEND}/api/users/watchlist/all`
            let response = await axios.get(url);
            dispatch({type : GET_WATCHLIST_SUCCESS , payload : response});
        }
        catch(error){
            dispatch({type : GET_WATCHLIST_FAILURE , payload : error.response.data});
        }

    }
}

export const removeMovieFromWatchList = (id) => {
    return async(dispatch) => {
        try{
            dispatch({type : REMOVE_WATCHLIST_REQUEST})
            let url = `${BASE_URI_BACKEND}/api/users/watchlist/${id}`
            let response = await axios.post(url,id);
            dispatch({type : REMOVE_WATCHLIST_SUCCESS , payload : response});
        }
        catch(error){
            dispatch({type : REMOVE_WATCHLIST_FAILURE , payload : error.response.data});
        }

    }
}