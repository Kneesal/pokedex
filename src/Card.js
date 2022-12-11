import React from "react";
import DescriptionCard from "./DescriptionCard";

const Card = ({ pokemon, pokedata }) => {
  pokemon.sort((a, b) => a.id - b.id); //sort array so that it gives the correct order of the pokedex each time
  pokedata.sort((a, b) => a.id - b.id); //sort second data array so it gives correct order each time after fetch

  return (
    <div className="flex">
      {pokemon.map((pkmn, i) => {
        return (
          <div className = 'Cards' key = {pkmn.id} >
            <h1>{pkmn.name}</h1><p>pokedex entry# {pkmn.id}</p>
            <img alt={pkmn.name} src={pkmn.sprites.front_default}></img>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
