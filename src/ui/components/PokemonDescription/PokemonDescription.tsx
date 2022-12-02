/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import getPokemon from '../../../api/getPokemon';
import type { PokemonType } from '../../../types';

import PokemonDescriptionWrapper from './PokemonDescription.styles';

export const PokemonDescription: React.FC = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<PokemonType>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemon(Number(id));
        setPokemon(response.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const ability = useMemo(() => {
    return pokemon?.abilities.map((item) => {
      return item.ability.name;
    });
  }, [pokemon?.abilities]);

  const stats = useMemo(() => {
    return pokemon?.stats.map((item) => {
      const stat = item.base_stat;
      const name = Object.entries(item.stat).map((item) => {
        if (item[0] === 'name') {
          return item[1];
        }
      })[0];
      return { stat, name };
    });
  }, [pokemon?.stats]);

  return (
    <PokemonDescriptionWrapper>
      <div className="image-container">
        <img src={pokemon?.sprites.other?.dream_world.front_default} alt="pokemon image" />
      </div>
      <div className="text-container">
        <div className="content">
          <h2>General data</h2>
          <p>Name: <span>{pokemon?.name}</span></p>
          <p>Base experience: <span>{pokemon?.base_experience}</span></p>
          <p>Weight: <span>{pokemon?.weight}</span></p>
          <p>Height: <span>{pokemon?.height}</span></p>
        </div>
        <div className="content abilities">
          <h2>Abilities</h2>
          {ability?.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="content">
          <h2>Stats</h2>
          {stats?.map((item, index) => (
            <div key={index}>
              <p>{item.name}: <span>{item.stat}</span></p>
            </div>
          ))}
        </div>
      </div>
    </PokemonDescriptionWrapper >
  );
};

export default PokemonDescription;
