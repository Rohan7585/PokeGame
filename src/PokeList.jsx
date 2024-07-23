import React, { useEffect } from 'react';
import PokeCard from './PokeCard';

const PokeList = ({ name, url }) => {
  return (
    <div>
      {/* {pokemon.map((results, index) => (
        <PokeCard key={index} name={results.name} url = {results.url} />
      ))} */}
      
      {/* <a href={url} target="_blank" rel="noopener noreferrer"> */}
      <h2 className='name'>{name}</h2>
      <PokeCard name={name} url = {url} />
      
    </div>
  );
};

export default PokeList;