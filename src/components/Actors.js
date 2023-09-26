import React from "react";
import { actors } from "../data";

function Actors() {

  const actorItems = actors.map(actor => {
    return <div key={actor.id}>
      <h2>
      Name: {actor.name}
      </h2>
      <br />
      <strong>Movies:</strong>
        {actor.movies.map(movie =>{
          return <ul key={actor.id}><li>{movie}</li></ul>
        })}
      </div>
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {actorItems}
  </div>
  )
}

export default Actors;
