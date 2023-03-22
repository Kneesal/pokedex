import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import SearchBox from "../Components/SearchBox";
import Modal from "../Components/Modal";
import Scroll from "../Components/Scroll";
import "../fonts/PokemonSolid.ttf";

const App:React.FC = () => {
  const [pokemon, setPokemon] = useState<pokemonType>([]);
  const [pokemondescriptions, setPokemonDescriptions] = useState([]);
  const [searchinput, setSearchInput] = useState("");
  const [show, setShow] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<selectedCardType>([]);
  const [selectedSprite, setSelectedSprite] = useState<selectedSpriteType>([]);

  type pokemonType = {
      id: number,
      name: string, 
      species: {
        url: string
      },
      sprites: {
        front_default: string    
      },
  }[]

  interface pokeList {
    results:{
      name: string,
      url: string
    }[]
  }

   type selectedSpriteType = {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  }[]

  type selectedCardType = {
    name: string,
    id: number,
    flavor_text_entries: {
      language: {
        name: string
      }, 
    flavor_text:string}[]
  }[]
  

  useEffect(() => {
    let ignore = false;


    const fetchData = async() => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=904`
      ); //fetch all pokemon
      const pokemonlist:pokeList = await response.json()

      pokemonlist.results.forEach(async (pokemon) => {
        const response = await fetch(pokemon.url); //fetch pokemon specific data
        const pokedata = await response.json();
        const response2 = await fetch(pokedata.species.url); //fetch species data descriptions
        const speciesdata = await response2.json();
        if (!ignore) {
          setPokemon((prevstate) => prevstate.concat(pokedata));
          setPokemonDescriptions((prevstate) => prevstate.concat(speciesdata));
        }
      });
    };
    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const showModal = (key:number) => {
    setShow((prevstate) => !prevstate);
    setSelectedCard(
      pokemondescriptions.filter((pokemon:{id: number}) => pokemon.id  === key)
    );
    setSelectedSprite(pokemon.filter((data) => data.id === key));
  };

  const filteredPokemon = pokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchinput.toLowerCase())
  );

  return pokemondescriptions.length ? ( //we wait for pokedescriptions state because it contains all card and modal data and it populates later
    <div>
      <h1 className="title">Pokédex</h1>
      <SearchBox handleChange={handleChange} />
      <Modal
        show={show}
        selectedCard={selectedCard}
        selectedSprite={selectedSprite}
        showModal={showModal}
      />
      <Scroll>
        <Card pokemon={filteredPokemon} showModal={showModal} />
      </Scroll>
      <h4> {`made with <3`} </h4>
      <h5> {`Nisal Cottingham`} </h5>
    </div>
  ) : (
    <h1 className="title">Loading...</h1>
  );
};

export default App;

