import React , { Component , useState , useEffect } from 'react';
import axios from './axios'
import requests from './requests'
import './Banner.css'
import Button from '@material-ui/core'

const Banner = () => {
    const [movie , setMovie] = useState ([]);

    useEffect (() => {
        async function fetchData () {
            const request = await axios.get (requests.fetchNetflixOriginals)
            console.log ("the requerst" , request.data.results [Math.floor (Math.random () * request.data.results.length - 1)])
            setMovie (request.data.results [Math.floor (Math.random () * request.data.results.length - 1)])

        }

        fetchData ();
    } , []);
    console.log (movie)

    function truncate (str , n) {
        return str?.length > n ? str.substr (0 , n - 1) + "..." : str;
    }

    return (
        <header className='banner' style={{
            backgroundSize: 'cover' ,
            backgroundImage: `url(
            http://image.tmdb.org/t/p/original/${movie?.backdrop_path})` ,
            backgroundPosition: 'center center' ,

        }}>

            <div className="banner__contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className='banner__description'>
                    {truncate (movie?.overview , 150)}
                </h1>
            </div>

            <div className="banner__fadeBottom"/>
        </header>
    )
}
// https://www.google.com/search?q=netflix+image&sxsrf=ALeKk03up3YHrdgrmsJMyf3g17iRoTmzIg:1598990375308&tbm=isch&source=iu&ictx=1&fir=oP3qjbrj5xYWhM%252C2IFXLuvLAMJlpM%252C_&vet=1&usg=AI4_-kS9LODygJouJcY80-MuCas6a2jg-w&sa=X&ved=2ahUKEwio4Maq38jrAhUGYsAKHeYSAKcQ9QF6BAgKEDY#imgrc=oP3qjbrj5xYWhM
export default Banner;