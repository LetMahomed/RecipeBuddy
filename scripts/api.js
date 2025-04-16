// Spoonacular API for fetching recipes based on ingredients
const SPOONACULAR_API_KEY = 'your_spoonacular_api_key'; // Replace with your actual API key

// Function to get recipes based on pantry ingredients
function getRecipesByIngredients(ingredients) {
  const query = ingredients.join(','); // Convert the array to a comma-separated string
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&apiKey=${SPOONACULAR_API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Handle the fetched recipes data
      console.log(data); // Display the recipes in the console or update the UI accordingly
      displayRecipes(data); // Function to display the recipes on the page
    })
    .catch(error => console.error("Error fetching recipes: ", error));
}

// Example usage:
const pantryIngredients = ["tomato", "cheese", "garlic"];
getRecipesByIngredients(pantryIngredients);

// Function to display recipes (optional)
function displayRecipes(recipes) {
  const recipeContainer = document.getElementById("recipe-container");
  recipes.forEach(recipe => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe-item");
    recipeElement.innerHTML = `
      <h3>${recipe.title}</h3>
      <img src="https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg" alt="${recipe.title}">
      <a href="https://spoonacular.com/recipes/${recipe.title}-${recipe.id}" target="_blank">View Recipe</a>
    `;
    recipeContainer.appendChild(recipeElement);
  });
}
// Edamam API for getting nutritional information for recipes
const EDAMAM_APP_ID = 'your_edamam_app_id'; // Replace with your Edamam App ID
const EDAMAM_APP_KEY = 'your_edamam_app_key'; // Replace with your Edamam App Key

// Function to get nutrition data for a recipe
function getRecipeNutrition(recipeId) {
  const url = `https://api.edamam.com/api/recipes/v2/${recipeId}?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Handle the nutritional data
      console.log(data); // Display the nutrition information in the console or update the UI accordingly
      displayNutrition(data);
    })
    .catch(error => console.error("Error fetching nutrition data: ", error));
}

// Example usage: get nutritional information for a specific recipe
const exampleRecipeId = "your_recipe_id_here"; // Replace with actual recipe ID from Spoonacular
getRecipeNutrition(exampleRecipeId);

// Function to display nutrition information (optional)
function displayNutrition(data) {
  const nutritionContainer = document.getElementById("nutrition-container");
  const nutritionInfo = data.recipe.totalNutrients;
  nutritionContainer.innerHTML = `
    <h4>Nutrition Information:</h4>
    <p>Calories: ${nutritionInfo.ENERC_KCAL.quantity} ${nutritionInfo.ENERC_KCAL.unit}</p>
    <p>Protein: ${nutritionInfo.PROCNT.quantity} ${nutritionInfo.PROCNT.unit}</p>
    <p>Carbs: ${nutritionInfo.CHOCDF.quantity} ${nutritionInfo.CHOCDF.unit}</p>
    <p>Fat: ${nutritionInfo.FAT.quantity} ${nutritionInfo.FAT.unit}</p>
  `;
}

