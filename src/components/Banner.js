import React, { useState, useEffect } from 'react';
import axios from "./axios";
import './Banner.css';
import config from './config';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(config.orignal);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request.data.results;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-3) + '...' : str;
    }

    return (
        <div className="banner" style={{
            backgroundImage: `url(${config.base_url}${movie?.backdrop_path})`
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <p className="banner__description">
                    { truncate(movie?.overview, 150) }
                </p>
            </div>
            <div className="banner--fadeBottom"></div>
        </div>
    )
}

export default Banner;
