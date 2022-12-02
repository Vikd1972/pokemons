import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './ui/components/Header/Header';
import ListPokemons from './ui/components/ListPokemons/ListPokemons';
import PokemonDescription from './ui/components/PokemonDescription/PokemonDescription';
import Footer from './ui/components/Footer/Footer';

import AppWrapper from './App.styles';

export const App: React.FC = () => {
  return (
    <AppWrapper className="bookroom">
      <Header />
      <Routes>
        <Route path="/" element={<ListPokemons />} />
        <Route path="/pokemon/:id" element={<PokemonDescription />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
};

export default App;
