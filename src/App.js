import React, { Component } from "react";
import Card from "./Card.js";
import SearchBox from "./SearchBox.js";
import Modal from "./Modal.js";
import Scroll from "./Scroll.js";

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
      .then((pokemonlist) => {
        return pokemonlist.results.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokedata) => {
              fetch(pokedata.species.url)
                .then((data) => data.json())
                .then((formdata) =>
                  this.setState((prevstate) => ({
                    pokedescriptions:
                      prevstate.pokedescriptions.concat(formdata),
                  }))
                );
              return this.setState((prevState) => ({
                pokemon: prevState.pokemon.concat(pokedata),
              }));
            });
        });
      });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchinput: event.target.value });
    // state ? event.target.class
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
    console.log(this.state.show)
    const filteredPokemon = this.state.pokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.state.searchinput.toLowerCase())
    );
    console.log(this.state.pokedescriptions)
    return (
      <div>
        <h1>Pokédex</h1>
        <SearchBox handleChange={this.handleChange} />
        <Modal show={this.state.show} selectedCard = {this.state.selectedCard} selectedSprite = {this.state.selectedSprite} showModal = {this.showModal} />
        <Scroll>
          <Card pokemon={filteredPokemon} showModal={this.showModal} />
        </Scroll>
      </div>
    );
  }
}

export default App;
