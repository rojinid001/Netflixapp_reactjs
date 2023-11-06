import React, { useEffect, useState } from 'react';
import { APIkey, imageUrl } from '../../Constants/constant'; // Make sure to import imageUrl
import axios from '../../axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${APIkey}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[0]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`, 
      }}
      className="banner"
    >
      <div className="content">
        <div className="title">
          <h1 className="title">{movie ? movie.title : ''}</h1>
          <div className="banner-buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
          <h1 className="description">{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade-bottom"></div>
      </div>
    </div>
  );
}

export default Banner;
