import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  return <li>{props.value}</li>;
}

function Pokemon(props) {

  const pokemons = props.pokemons;
  return (
       <ul>
      {pokemons.map(pokemon =>
        <ListItem key={pokemon.number} value={pokemon.name} />)}
       </ul>
  );
}

ReactDOM.render(<Pokemon pokemons={pokedex} />, document.getElementById('root'));
