/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import getPokemon from '../../../api/getPokemon';
import type { PokemonType } from '../../../types';

import PokemonWrapper from './Pokemon.styles';

interface IOption {
  id: number;
}

export const Pokemon: React.FC<IOption> = ({ id }) => {
  const [pokemon, setPokemon] = useState<PokemonType>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemon(id);
        setPokemon(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <PokemonWrapper>
      <Link to={`/pokemon/${id}`}>
        <div className="image-container">
          <img src={pokemon?.sprites.front_default} alt="pokemon image" />
        </div>
        <p>Name: <span>{pokemon?.name}</span></p>
        <p>Base experience: <span>{pokemon?.base_experience}</span></p>
        <p>Weight: <span>{pokemon?.weight}</span></p>
        <p>Height: <span>{pokemon?.height}</span></p>
      </Link>
    </PokemonWrapper >
  );
};

export default Pokemon;
