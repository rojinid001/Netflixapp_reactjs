import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube'; // Updated import
import './RowPost.css';
import axios from '../../axios';
import { imageUrl, APIkey } from '../../Constants/constant';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0].id); // Fixed to set the movie ID
      } else {
        console.log('Array Empty');
      }
    });
  }, [props.url]); // Include props.url in the dependency array to update when URL changes

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${APIkey}&language=en-US`).then((response) => {
      if (response.data.results.length > 0) {
        setUrlId(response.data.results[0].key); // Set the YouTube video key
      } else {
        console.log('No video available');
      }
    });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            key={obj.id}
            src={`${imageUrl + obj.backdrop_path}`}
            className={props.isSmall ? 'smallPoster' : 'poster'}
            onClick={() => handleMovie(obj.id)} // Updated function name
          />
        ))}
      </div>
      {urlid && <YouTube videoId={urlid} opts={opts} />} {/* Use videoId */}
    </div>
  );
}

export default RowPost;

