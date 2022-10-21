import React from 'react';

import Header from '../components/Header';
import AllRecipes from '../components/Recipes';
import CategoriasRecipes from '../components/CategoriesRecipes';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <div className="food-page">
      <Header title="Drinks" enableSearch />
      <hr />
      <CategoriasRecipes foodRecipes="drinks" />
      <hr />
      <AllRecipes title="drinks" />
      <Footer />
    </div>
  );
}

export default Drinks;
