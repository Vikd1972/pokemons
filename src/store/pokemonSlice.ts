/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IPokemonType {
  id: number;
  pokemon: string;
}

const initialState: IPokemonType = {
  id: 0,
  pokemon: '',
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<IPokemonType>) => {
      state.pokemon = action.payload.pokemon;
    },
  },
});

export const {
  addPokemon,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
