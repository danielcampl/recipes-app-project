import React from 'react';

import Header from '../components/Header';
import AllRecipes from '../components/Recipes';
import CategoriasRecipes from '../components/CategoriesRecipes';
import Footer from '../components/Footer';
import '../css/Foods.css';

function Foods() {
  return (
    <div className="food-page">
      <Header title="Foods" enableSearch />
      <CategoriasRecipes foodRecipes="meals" />
      <AllRecipes title="foods" />
      <Footer />
    </div>
  );
}

export default Foods;
