import React, { Component } from "react";
import Card from "../Components/Card.js";
import SearchBox from "../Components/SearchBox.js";
import Modal from "../Components/Modal.js";
import Scroll from "../Components/Scroll.js";
import "../fonts/PokemonSolid.ttf"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      pokedescriptions: [],
      searchinput: "",
      show: false,
      selectedCard: [],
      selectedSprite: [],
    };
  }

  componentDidMount() {
    // TODO: convert to async function to make syntax cleaner
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=904`)
      .then((response) => response.json())
      .then((pokemonlist) => { //fetched pokeon
        return pokemonlist.results.forEach((pokemon) => { 
          fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokedata) => { //fetch sprites
              fetch(pokedata.species.url)
                .then((data) => data.json())
                .then((formdata) =>
                  this.setState((prevstate) => ({
                    pokedescriptions:
                      prevstate.pokedescriptions.concat(formdata), //fetched pokemon desciptions
                  }))
                );
              return this.setState((prevState) => ({
                pokemon: prevState.pokemon.concat(pokedata), //store sprites in pokemon data //also has name and id of pkmn
              }));
            });
        });
      });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchinput: event.target.value });
  };

  showModal = (key) => {
    this.setState((prevstate)=>({
      show: !prevstate.show,
      selectedCard: this.state.pokedescriptions.filter(
        (pokemon) => pokemon.id === key
      ),
      selectedSprite: this.state.pokemon.filter(
        (pokemon) => pokemon.id === key
      ),
    })) 
    ;
  };

  render() {
    const filteredPokemon = this.state.pokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.state.searchinput.toLowerCase())
    );
    return this.state.pokedescriptions.length ? ( //we wait for pokedescriptions state because it contains all card and modal data and it populates lates
      <div>
        <h1 className = "title">Pokédex</h1>
        <SearchBox handleChange={this.handleChange} />
        <Modal show={this.state.show} selectedCard = {this.state.selectedCard} selectedSprite = {this.state.selectedSprite} showModal = {this.showModal} />
        <Scroll>
          <Card pokemon={filteredPokemon} showModal={this.showModal} />
        </Scroll>
        <h4> {`made with <3 for God's glory`} </h4>
        <h5> {`Nisal Cottingham`} </h5>
      </div>
    ): <h1 className = "title">Loading...</h1>;
  }
}

export default App;
