import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY, IMAGE_URL} from "../../config/config";
import {Link} from "react-router-dom";

const SearchPage=()=>{
    const [search,setSearch]=useState('')
    const [searchResult,setSearchResult]=useState([])


    const handleSearch=()=>{
        axios(`https://api.themoviedb.org/3/search/movie?language=ru-RU&api_key=${API_KEY}&query=${search}`)
            .then(({data})=>{
                console.log(data.results)
                setSearchResult(data.results)
            })
    }


    return(
        <div className={'container'}>
            <h2>Найти фильм</h2>
            <div className={'search-cont'}>
                <input className={'searchInput'} placeholder={'Фильмы, сериалы'} type="text" onChange={(e)=>setSearch(e.target.value)}/>
                <button className={'searchBtn'} onClick={handleSearch}>Найти</button>
            </div>

            {
                searchResult.map((movie)=>(
                    <div key={movie.id} className={"inner"} >
                        <div className="col-4">
                            <img src={`${IMAGE_URL}${movie.poster_path}`} alt=""/>
                            <h3>{movie.title}</h3>
                            <p className={'moves_date'}>{movie.release_date}</p>
                        </div>
                        <div className="col-8">
                            <h1>{movie.title}</h1>
                            <div className={'moves_info inner-box'}>
                                <h2>О Фильме</h2>
                                <span>{movie.overview}</span>
                            </div>

                            <div className={"btn-inner"}>
                                <p className={'move_rating'}>{movie.vote_average}</p>
                                <p className={'move_popular'}>{movie.popularity} оценки</p>
                                <Link to={`/moves/${movie.id}`}>
                                    <button className={'searchBtn'}>Смотреть фильм</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))

            }

        </div>
    )
}
export default SearchPage
