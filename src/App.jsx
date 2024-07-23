import { useEffect, useState } from 'react';
import PokeList from './PokeList';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomPokemon1, setRandomPokemon1] = useState(null);
  const [randomPokemon2, setRandomPokemon2] = useState(null);
  const apiKey = 'https://pokeapi.co/api/v2/pokemon?limit=1000'; 

  useEffect(() => {
    const fetchPoke = async () => {
      try {
        const response = await fetch(apiKey);
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.error("Error fetching the data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPoke();
  }, [apiKey]);

  const handleRandomClick1 = () => {
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    setRandomPokemon1(pokemon[randomIndex]);
  };

  const handleRandomClick2 = () => {
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    setRandomPokemon2(pokemon[randomIndex]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='main'>
      <h1>Pokémon</h1>
      <div className="body">
      <button onClick={handleRandomClick1}>Choose Pokémon 1</button>
      <button onClick={handleRandomClick2}>Choose Pokémon 2</button>
      <div className="container">
      {randomPokemon1 && (
        <div className="card">
          <h2>Pokémon 1</h2>
          <PokeList name={randomPokemon1.name} url={randomPokemon1.url} />
        </div>
      )}
      {randomPokemon2 && (
        <div className="card">
          <h2>Pokémon 2</h2>
          <PokeList name={randomPokemon2.name} url={randomPokemon2.url} />
        </div>
      )}
      </div>
      </div>
    </div>
  );
};

export default App;