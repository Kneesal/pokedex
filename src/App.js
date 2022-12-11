import React, { Component } from "react";
import Card from "./Card.js";
import SearchBox from "./SearchBox.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      pokedescriptions: [],
      searchinput: ''
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
    event.preventDefault()
    this.setState({searchinput: event.target.value})
  }


  render() {
    const filteredPokemon = this.state.pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchinput.toLowerCase()));
    return (
      <div>
        <h1>Kanto Pokédex</h1>
        <SearchBox handleChange={this.handleChange}/>
        <Card
          pokemon={filteredPokemon}
          pokedata={this.state.pokedescriptions}
        />
      </div>
    );
  }
}

export default App;
