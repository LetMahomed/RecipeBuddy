// scripts/api.js
const SPOONACULAR_API_KEY = "your_api_key_here";
const BASE_URL = "https://api.spoonacular.com/recipes";

export async function fetchRecipes(ingredients) {
  const response = await fetch(`${BASE_URL}/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${SPOONACULAR_API_KEY}`);
  const data = await response.json();
  return data;
}
