import React from "react";
import {type pokemonType} from '../Container/App'


interface cardProps {
  pokemon: pokemonType
  showModal: (key: number) => void,
}


const Card = ({ pokemon, showModal}:cardProps) => {
  console.log(pokemon)
  pokemon.sort((a, b) => a.id - b.id); //sort array so that it gives the correct order of the pokedex each time
  return (
    <div className="flex">
      {pokemon.map((pkmn) => {
        return (
          <div className = 'Cards' key = {pkmn.id} onClick={()=>showModal(pkmn.id)} >
            <h2>{pkmn.name}</h2>
            <p>pokedex entry# {pkmn.id}</p>
            <img alt={pkmn.name} src={pkmn.sprites.front_default}></img>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
