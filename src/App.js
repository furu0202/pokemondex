import { useEffect } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon.js';

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全ポケモンのデータを取得
      let res = await getAllPokemon(initialURL);
    };
  });
  return <div className='App'></div>;
}

export default App;
