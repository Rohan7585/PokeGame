import { useEffect, useState } from "react";
const PokeCard = ({ name, url }) => {
    const [pokemonData, setPokemonData] = useState(null);
    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Error fetching Pokémon data:', error);
            }
        };

        fetchPokemonData();
    }, [url]);
    return (
        <div>
            <div>
                {pokemonData ? (
                    <>
                        <img
                            src={pokemonData.sprites.front_default}
                            alt={name}
                        />
                        <div>
                            <div>{name}</div>
                            <p>
                                Height: {pokemonData.height}
                            </p>
                            <p>
                                Weight: {pokemonData.weight}
                            </p>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default PokeCard;