import React from "react";


const Card = ({ pokemon, showModal}) => {
  pokemon.sort((a, b) => a.id - b.id); //sort array so that it gives the correct order of the pokedex each time
  return (
    <div className="flex">
      {pokemon.map((pkmn, i) => {
        return (
          <div className = 'Cards' key = {pkmn.id} onClick={()=>showModal(pkmn.id)} >
            <h1>{pkmn.name}</h1><p>pokedex entry# {pkmn.id}</p>
            <img alt={pkmn.name} src={pkmn.sprites.front_default}></img>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
