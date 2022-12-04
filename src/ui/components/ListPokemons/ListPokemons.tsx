import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import Pokemon from '../Pokemon/Pokemon';
import PaginationPokemons from './PaginationPokemons/PaginationPokemons';

import logo from '../../assets/logo.png';

import ListPokemonsWrapper from './ListPokemons.styles';

export const ListPokemons: React.FC = () => {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const limit = 12;

  const idPpokemonsArray = useMemo(() => {
    const id = [];
    const startId = (page - 1) * limit + 1;
    for (let i = startId; i < startId + limit; i++) {
      id.push(i);
    }
    return id;
  }, [page]);

  return (
    <ListPokemonsWrapper>
      <div className="logo">
        <img
          src={logo}
          alt="logo"
        />
      </div>
      <div className="pokemon-container">
        {idPpokemonsArray.map((id) => (
          <Pokemon
            key={id}
            id={id}
          />
        ))}
      </div>
      <PaginationPokemons
        limit={limit}
      />
    </ListPokemonsWrapper >
  );
};

export default ListPokemons;
