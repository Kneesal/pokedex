import React, { Component } from "react";
import Card from "./Card.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
    };
  }

  componentDidMount() { // TODO: convert to async function to make syntax cleaner
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((response) => response.json())
      .then((pokemonlist) => {
        return(
          pokemonlist.results.forEach((pokemon) => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(pokedata => this.setState((prevState) => ({pokemon: prevState.pokemon.concat(pokedata)})))
          })
        )
      })
    
  }

  render() {
    //TODO: look at robofriends carList and sse if we can refactor that code in here
    return (
      <div>
        <h1>Kanto Pokédex</h1>
        <Card pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
