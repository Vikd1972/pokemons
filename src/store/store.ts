import { configureStore } from '@reduxjs/toolkit';
import pokemonReduser from './pokemonSlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReduser,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export { store };
