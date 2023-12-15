import React, {useEffect, useState} from 'react';
import layout from "../../Components/Layout/Layout";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../config/config";
import {useDispatch, useSelector} from "react-redux";
import {clearMovie, getMovie} from "../../redux/movieAction";


const MoviePage = () => {
    const {id}= useParams()
    const dispatch = useDispatch()
    const movie = useSelector(state => state.movie)

    useEffect(()=> {
        dispatch(getMovie(id))
        return () =>{
            dispatch(clearMovie())
        }
    },[])
    return (
        <layout>
            <div
                style={{
                   backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                   backgroundSize: 'cover',
                   backgroundPosition:'center',
                   height: '100vh',
                   width:'100%',
                   marginBottom: '20px'
                }}
            >
            </div>
        </layout>
    );
}

export default MoviePage;