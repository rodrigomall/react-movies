import React from 'react';

const IMG_API='https://image.tmdb.org/t/p/w1280';
const notImage = 'https://images.pexels.com/photos/5030569/pexels-photo-5030569.jpeg?cs=srgb&dl=pexels-alex-hoces-5030569.jpg&fm=jpg';


const setVoteClas = (vote) => {
  if(vote >= 8) {
    return 'green'
  } else if (vote >= 6){
    return 'orange'
  } else {
    return 'red';
  }
}

const Movie = ({title, poster_path, overview, vote_average}) => {
  return (
    <div className='movie'>
      <img src={ poster_path ? IMG_API + poster_path : notImage } alt={title} />
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className={`tag ${setVoteClas(vote_average)}`}>{vote_average}</span>
      </div>
      <div className='movie-over'>
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  )
};

export default Movie;