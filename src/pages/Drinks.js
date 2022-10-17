import React from 'react';

import Header from '../components/Header';
import AllRecipes from '../components/Recipes';
import CategoriasRecipes from '../components/CategoriesRecipes';
import Footer from '../components/Footer';
import '../css/Drinks.css';

function Drinks() {
  return (
    <div className="drinks-page">
      <Header title="Drinks" enableSearch />
      <CategoriasRecipes foodRecipes="drinks" />
      <AllRecipes title="drinks" />
      <Footer />
    </div>
  );
}

export default Drinks;
