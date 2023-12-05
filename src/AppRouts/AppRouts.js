import {Route, Routes} from "react-router-dom";
import HomePage from "../Views/HomePage/HomePage";
import MoviePage from "../Views/MoviePage/MoviePage";
import MovieList from "../Components/MovieList/MovieList";
import Header from "../Components/Header/header"
import Layout from "../Components/Layout/Layout";
import SearchPage from "../Views/SearchPage/SearchPage";

const AppRouts = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/> }/>
            <Route path="/movie/:id" element={<MoviePage/>}/>
            <Route path="/searchpage" element={<SearchPage/>}/>
        </Routes>
    )
}
export default AppRouts