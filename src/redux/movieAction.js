import axios from "axios";
import {API_KEY,BASE_URL} from "../config/config";

export const getMovie = (id) => {
    return dispatch => {
        axios(`${BASE_URL}movie/${id}?api key=${API_KEY},&language=ru-RU`)
            .then(({data}) => dispatch({type:'GET_MOVIE',payload:data}))
    }
}
export const clearMovie = () =>{
    return dispatch => {
        dispatch({type:'CLEAR_MOVIE'})
    }
}
