const SPOONACULAR_API_KEY = 'YOUR_API_KEY'; // Replace with your actual Spoonacular API key

async function getRecipesByIngredients(ingredients) {
  try {
    const ingredientsStr = ingredients.join(','); // Join ingredients into a comma-separated string
    console.log('Fetching recipes for ingredients:', ingredientsStr); // Log ingredients
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsStr}&number=3&apiKey=${SPOONACULAR_API_KEY}`);
    const data = await response.json();
    console.log('Fetched Data:', data); // Log the API response
    return data;
  } catch (error) {
    console.error('Error fetching recipes:', error); // Log any error
    return [];
  }
}

function displayRecipes(recipes) {
  const recipeContainer = document.getElementById("recipe-list");
  if (recipes.length === 0) {
    recipeContainer.innerHTML = 'No recipes found with these ingredients.';
    return;
  }
  recipes.forEach(recipe => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe-item");
    recipeElement.innerHTML = `
      <h3>${recipe.title}</h3>
      <img src="${recipe.image}" alt="${recipe.title}">
      <a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank">View Recipe</a>
    `;
    recipeContainer.appendChild(recipeElement);
  });
}
