export async function fetchDrinksAPI() {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const response = await data.json();
  return response;
}

export async function fetchMealsAPI() {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const response = data.json();
  return response;
}

// TENTATIVA FINAL //
// AJUDA DO THIAGO QUADROS //

export async function fetchCatoriesFoodsAPI() {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const response = data.json();
  return response;
}

export async function fetchCatoriesDrinksAPI() {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const response = data.json();
  return response;
}

export async function fetchCategoriesFilter(filter, type) {
  if (type === 'meals') {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}`);
    const response = data.json();
    return response;
  }
  if (type === 'drinks') {
    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`);
    const response = data.json();
    return response;
  }
}

const fetchCategories = async (foodRecipes) => {
  if (foodRecipes === 'meals') return fetchCatoriesFoodsAPI();
  return fetchCatoriesDrinksAPI();
};

export default fetchCategories;

export const DRINK_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/';
export const FOOD_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/';

export async function fetchAllAPIs(endpoint, pesquisa) {
  const response = await fetch(`${endpoint}${pesquisa}`);
  const data = await response.json();
  return data;
}
