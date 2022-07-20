import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index)=>{
        return(
          <div key={index}>
            <h2>Name :{actor.name}</h2>
            Movies: <ul>
              {(actor.movies).map((acmovie,index) => {
                return <li key={index}>{acmovie}</li>
              })}

            </ul>
      
          </div>
        )
      })}
    </div>
  )
}

export default Actors;
