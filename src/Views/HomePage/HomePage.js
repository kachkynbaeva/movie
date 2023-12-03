import {useEffect, useState} from "react";
import axios from "axios";
import MovieList from '../../Components/MovieList/MovieList';
import {API_KEY, BASE_URL } from "../../config/config";
import Carousel from "../../Components/Carousel/Carousel";
import Layout from "../../Components/Layout/Layout";

const HomePage = () => {
    const [movies , setMovies] = useState([])

    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}`)
            .then(({data}) => setMovies(data.results))
    }, []);
    console.log(movies)

    return (
        <Layout>
            <Carousel movies = {movies}/>
            <div className="container">
                <MovieList movies={movies}/>
            </div>

        </Layout>
    )
}
export default HomePage;