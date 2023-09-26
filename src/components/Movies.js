import React from "react";
import { movies } from "../data";


function Movies() {

  const movieItems = movies.map(movie => {
    return <div key={movie.id}>
      <h2>
      Name: {movie.title}
      </h2>
      <br />
      <strong>Time:</strong> {movie.time}
      <br />
      <br />
      <strong>Genres:</strong>
       <ul>{movie.genres.map(genre => { 
        return <li key={movie.id}>{genre}</li>
       })}</ul>
    </div>
  })

  return (
  <div>
    <h1>Movies</h1>
    {movieItems}
  </div>
  )
}

export default Movies;
