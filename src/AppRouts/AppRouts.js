import {Route, Routes} from "react-router-dom";
import HomePage from "../Views/HomePage/HomePage";
import MoviePage from "../Views/MoviePage/MoviePage";
import MovieList from "../Components/MovieList/MovieList";
import Header from "../Components/Header/header"
import Layout from "../Components/Layout/Layout";

const AppRouts = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/> }/>
            <Route path="/movie/:id" element={<MoviePage/>}/>
        </Routes>
    )
}
export default AppRouts