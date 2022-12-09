import React from "react";


const Card = ({ pokemon, pokedata }) => {
  pokemon.sort((a, b) => a.id - b.id); //sort array so that it gives the correct order of the pokedex each time

  return (
    <div>
      {pokemon.map((pkmn, i) => {
        return (
          <div className = 'Cards' key = {pkmn.id} >
            <h1>{pkmn.name}</h1><p>pokedex entry# {pkmn.id}</p>
            <img alt={pkmn.name} src={pkmn.sprites.front_default}></img>
            <p>{pokemon.type}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
