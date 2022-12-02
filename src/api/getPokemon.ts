/* eslint-disable no-console */
import type { AxiosResponse } from 'axios';
import instance from '.';

import type { PokemonType } from '../types';

const getPokemon = async (id: number): Promise<AxiosResponse<PokemonType>> => {
  const response = await instance.get(`pokemon/${id}`);

  return response;
};

export default getPokemon;
