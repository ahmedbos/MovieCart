import React from "react";
import StarRatingComponent from 'react-star-rating-component';
const Movie = ( {movie} ) => {
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.title}`}
          src={movie.posterUrl}
        />
      </div>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
        />
      
      <p>{movie.description}</p>
    </div>
  );
};


export default Movie;