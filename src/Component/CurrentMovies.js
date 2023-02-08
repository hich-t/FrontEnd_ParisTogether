import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const API_KEY = "8b2427b3a5ae1475e6decc300a6eb415";
const endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=fr`;

const CurrentMovies = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get(endpoint)
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err));
  }, []);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    console.log((movies.length)/5)
    console.log(currentIndex)
    if (currentIndex >= 3) {
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="moviecomponent">
      <div className="movielist" style={{
        display: 'flex',
        transform: `translateX(${currentIndex * -25}%)`,
        transition: 'transform 0.5s ease-out',
      }}>
        {movies.map((movie, index) => (
          <Card
            key={movie.id}
            className={`moviecard`}
            
          >
            <CardActionArea href={`https://www.themoviedb.org/movie/${movie.id}-${movie.title.toLowerCase().split(' ').join('-')}`} target="_blank">
              <CardMedia
                className="movieposter"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <CardContent>
                <Typography className="movietitle">
                  {movie.title}
                </Typography>
                <Typography className="movierating">
                  {movie.vote_average}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <button className='previousbutton' onClick={handlePrevClick}> ◀ </button>
      <button className="nextbutton" onClick={handleNextClick}> ▶ </button>
    </div>
  );
};

export default CurrentMovies;
