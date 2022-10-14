import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Context from '../context/ProviderApp';
import fetchCategories from '../services/RecipesApi';

function Recipes({ type }) {
  const {
    allFoods,
    setAllFoods,
    allDrinks,
    setAllDrinks,
    foodsList,
    drinksList,
    trueMeal,
    filter,
    setFilter,
  } = useContext(Context);

  const handleClick = async ({ target: { name } }) => {
    const MAX_RECIPES = 12;
    if (type === 'meals' && name !== 'All' && name !== filter) {
      const test = await fetchCategories(name);
      while (test.meals.length > MAX_RECIPES) {
        test.meals.pop();
      }
      setFoods(test.meals);
      setFilter(name);
    } else if (type === 'drinks' && name !== 'All' && name !== filter) {
      const test = await fetchCategories(name);
      while (test.drinks.length > MAX_RECIPES) {
        test.drinks.pop();
      }
      setDrinks(test.drinks);
      setFilter(name);
    }

    if (type === 'meals' && (name === 'All' || name === filter)) {
      setFoods(trueMeal);
      setFilter('All');
    } else if (type === 'drinks' && (name === 'All' || name === filter)) {
      setDrinks(trueMeal);
      setFilter('All');
    }
  };

  const newPrint = (data, index) => (
    <Link
      to={ `/${type}/${type === 'meals' ? data.idMeal : data.idDrink}` }
      key={ index }
    >
      <div data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ type === 'foods' ? data.strMealThumb : data.strDrinkThumb }
          alt={ type === 'foods' ? data.strMeal : data.strDrink }
        />
        <h2
          data-testid={ `${index}-card-name` }
        >
          { type === 'foods' ? data.strMeal : data.strDrink }
        </h2>
      </div>
    </Link>
  );

  const printList = (data, index) => (
    <button
      key={ index }
      id={ index }
      type="button"
      data-testid={ `${data.strCategory}-category-filter` }
      name={ data.strCategory }
      onClick={ handleClick }
    >
      {data.strCategory}
    </button>
  );

  const printDrinks = () => allDrinks.map((data, index) => newPrint(data, index));

  const printFoods = () => allFoods.map((data, index) => newPrint(data, index));

  const printFoodsList = () => (
    <div>
      {foodsList.map((data, index) => printList(data, index))}
      <button
        type="button"
        data-testid="All-category-filter"
        name="All"
        onClick={ handleClick }
      >
        All
      </button>
    </div>
  );

  const printDrinkList = () => (
    <div>
      {drinksList.map((data, index) => printList(data, index))}
      <button
        type="button"
        data-testid="All-category-filter"
        name="All"
        onClick={ handleClick }
      >
        All
      </button>
    </div>
  );

  const allPrint = () => {
    if (type === 'meals' && foods) {
      return (
        <section>
          { printFoodsList() }
          { printFoods() }
        </section>
      );
    }
    if (type === 'drinks' && drinks) {
      return (
        <section>
          { printDrinkList() }
          { printDrinks() }
        </section>
      );
    }
  };

  return (
    <section>
      { allPrint() }
    </section>
  );
}

Recipes.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default Recipes;
