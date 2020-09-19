import React, { useState, useEffect } from 'react';
import axios from "./axios";
import './Row.css';
import config from './config';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargePoster }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request.data.results;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
    };
    const handleClick = movie => {
        movieTrailer(movie?.name || "")
        .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            const newUrl = urlParams.get('v');
            if(trailerUrl == newUrl) {
                setTrailerUrl('');
            } else {
                setTrailerUrl(urlParams.get('v'));
            }
        }).catch(err => console.warn('trailer',err));
    }
    return (
        <div className="row">
            <h2 className="row_title">{ title }</h2>
            <div className="row__posters">
                {movies.map(movie => {
                    return <img className={isLargePoster ? 'row__poster row__posterLarge': 'row__poster'}
                                onClick={() => handleClick(movie)}
                                key={movie.id} 
                                src={`${config.base_url}${isLargePoster ? movie.poster_path : movie.backdrop_path}`} 
                                alt={movie.name} />
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}  />}
        </div>
    )
}

export default Row
