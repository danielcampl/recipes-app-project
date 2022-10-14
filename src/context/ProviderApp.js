import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './ContextApp';

function ProviderApp({ children }) {
  const [stateEmail, setStateEmail] = useState({ email: '',
  });
  const [statePassword, setStatePassword] = useState({ password: '',
  });

  const [stateSearch, setStateSearch] = useState('');
  const [stateRadio, setStateRadio] = useState('');
  const [allFoods, setAllFoods] = useState();
  const [allDrinks, setAllDrinks] = useState();
  const [categories, setCategories] = useState([]);
  const [toggle, setToggle] = useState('');
  const [stateIdMeal, setStateIdMeal] = useState('');
  const [stateIdDrinks, setIdDrinks] = useState('');
  const [data, setData] = useState({});
  const [foodsList, setFoodsList] = useState([]);
  const [drinksList, setDrinksList] = useState([]);
  const [trueMeal, setTrueMeal] = useState([]);
  const [filter, setFilter] = useState('All');

  const valueObj = { stateEmail,
    setStateEmail,
    statePassword,
    setStatePassword,
    stateSearch,
    setStateSearch,
    stateRadio,
    setStateRadio,
    allFoods,
    setAllFoods,
    allDrinks,
    setAllDrinks,
    categories,
    setCategories,
    toggle,
    setToggle,
    stateIdMeal,
    setStateIdMeal,
    stateIdDrinks,
    setIdDrinks,
    data,
    setData,
    foodsList,
    setFoodsList,
    drinksList,
    setDrinksList,
    trueMeal,
    setTrueMeal,
    filter,
    setFilter,
  };

  return (
    <RecipesContext.Provider
      value={ valueObj }
    >
      { children }
    </RecipesContext.Provider>
  );
}

export function ContextRecipes() {
  const context = useContext(RecipesContext);
  return context;
}

ProviderApp.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ProviderApp;
