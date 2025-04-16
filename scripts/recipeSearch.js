// scripts/recipeSearch.js
import { fetchRecipes } from './api.js';

document.getElementById("search-btn").addEventListener("click", async () => {
  const pantry = JSON.parse(localStorage.getItem("pantry")) || [];
  const ingredientStr = pantry.join(", ");
  const recipes = await fetchRecipes(ingredientStr);
  
  const results = document.getElementById("results");
  results.innerHTML = recipes.map(recipe => `
    <li>
      <img src="${recipe.image}" alt="${recipe.title}" width="100" />
      <p>${recipe.title}</p>
    </li>
  `).join("");
});
