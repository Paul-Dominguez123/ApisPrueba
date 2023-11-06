import { useEffect, useState } from "react"
import styled from 'styled-components';

export const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => response.json())
      .then((data) => {
        const promises = data.results.map((pokemon) =>
          fetch(pokemon.url)
            .then((response) => response.json())
            .catch((error) => console.error('Error fetching Pokemon data:', error))
        );

        Promise.all(promises)
          .then((pokemonData) => setPokemonList(pokemonData))
          .catch((error) => console.error('Error fetching Pokemon data:', error));
      })
      .catch((error) => console.error('Error fetching Pokemon list:', error));
  }, []);

  return (
    <Contenedor>
     {pokemonList.map((pokemon) => (
        <div key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        
          {/* Agrega más detalles según las propiedades disponibles en el objeto de respuesta */}
        </div>
      ))}
    </Contenedor>
  );
};

const Contenedor=styled.div`
  margin-left:250px;
`;