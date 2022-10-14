import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { ContextRecipes } from '../context/ProviderApp';

import '../css/FoodCards.css';

function FoodCards(props) {
  const cardsMaxNumber = 12;
  const { allFoods } = ContextRecipes();
  const { page } = props;
  return (
    <div className="food-recipes">
      { allFoods && allFoods.meals
        .filter((non, index) => index < cardsMaxNumber).map((food, index) => (
          <Link to={ `/${page}/${food.idMeal}` } key={ index } className="linkto">
            <div
              data-testid={ `${index}-recipe-card` }
              className="food-pic"
            >
              <img
                src={ food.strMealThumb }
                alt={ food.strMeal }
                data-testid={ `${index}-card-img` }
                style={ { width: '200px', height: '200px' } }
                className="food-img"
              />
              <p
                data-testid={ `${index}-card-name` }
                className="food-name"
              >
                { food.strMeal }
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}

FoodCards.propTypes = {
  page: PropTypes.string,
}.isRequired;

export default FoodCards;
