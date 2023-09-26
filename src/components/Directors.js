import React from "react";
import { directors } from "../data";

function Directors() {

  const directorItems = directors.map(director => {
    return <div key={director.id}>
      <h2>
      Name: {director.name}
      </h2>
      <br />
      <strong>Movies:</strong>
        {director.movies.map(movie =>{
          return <ul key={director.id}><li>{movie}</li></ul>
        })}
      </div>
  })

  return (
  <div>
    <h1>Directors Pages</h1>
    {directorItems}
  </div>
  )
}

export default Directors;
