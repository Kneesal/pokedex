import React from "react";


interface cardProps {
  pokemon: {
    id: number,
    name: string, 
    sprites: {
      front_default: string    
    },
  }[]
  showModal: (key: number) => void
}


const Card:React.FC<cardProps> = ({ pokemon, showModal}) => {
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
