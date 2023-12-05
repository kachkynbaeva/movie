import {useEffect, useState} from "react";
import axios from "axios";
import MovieList from '../../Components/MovieList/MovieList';
import {API_KEY, BASE_URL } from "../../config/config";
import Carousel from "../../Components/Carousel/Carousel";
import Layout from "../../Components/Layout/Layout";
import {useParams, useSearchParams} from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";

const HomePage = () => {
    const [movies , setMovies] = useState([])
    const [pageParam,setPageParam] = useSearchParams('page')
    const [page,setPage] = useState(pageParam.get('page') ||1)

    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}&page=${page}`)
            .then(({data}) => setMovies(data.results))
    }, [page]);
    const handleChangePage = (argPage) => {
        setPage(argPage)
        setPageParam({page:argPage})
    }

    return (
        <Layout>
            <Carousel movies = {movies}/>
            <div className="container">
                <MovieList movies={movies}/>
                <Pagination onClick={handleChangePage}/>
            </div>

        </Layout>
    )
}
export default HomePage;