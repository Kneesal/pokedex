import React from "react";


const Card = ({ pokemon }) => {
  pokemon.sort((a, b) => a.id - b.id); //sort array so that it gives the correct order of the pokedex each time
  return (
    <div>
      {pokemon.map((pkmn, i) => {
        return (
          <div class = 'Cards' key = {pkmn.id}>
            <h1>{pkmn.name}</h1><p>pokedex entry# {pkmn.id}</p>
            <img alt={pkmn.name} src={pkmn.sprites.front_default}></img>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
