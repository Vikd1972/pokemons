import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import Pokemon from '../Pokemon/Pokemon';
import PaginationPokemons from './PaginationPokemons/PaginationPokemons.styles';

import logo from '../../assets/logo.png';

import ListPokemonsWrapper from './ListPokemons.styles';

export const ListPokemons: React.FC = () => {
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const limit = Number(searchParams.get('limit') || 12);

  const idPpokemonsArray = useMemo(() => {
    const id = [];
    const startList = (page - 1) * limit + 1;
    for (let i = startList; i < startList + limit; i++) {
      id.push(i);
    }
    return id;
  }, [page, limit]);

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
      <PaginationPokemons />
    </ListPokemonsWrapper >
  );
};

export default ListPokemons;
