import React from "react";

const DescriptionCard = ({pokemon,pokedata}) => {
    return(
        <div>
            <h1>{pokemon.name}</h1>
            <img alt = {pokemon.name} src = {pokemon.sprites.front_default}></img>
            <p>{pokedata.habitat.name}</p>
            <p>{pokedata.flavor_text_entries[0].flavour_text}</p>
        </div>
    )
}

export default DescriptionCard