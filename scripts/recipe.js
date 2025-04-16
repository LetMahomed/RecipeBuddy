// recipes.js

// Function to get query parameters from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get the 'ingredients' from the URL
const ingredients = getQueryParam('ingredients');

// Display the ingredients and thank you message
document.getElementById('thank-you-message').innerHTML = `Thank you for using Recipe Buddy! You entered: ${ingredients}`;

if (ingredients) {
  // Split the ingredients by comma and display them
  const ingredientList = ingredients.split(',').map(item => item.trim());
  const recipeListDiv = document.getElementById('recipe-list');
  
  // Here, you can add logic to fetch or display recipes based on these ingredients.
  // For now, just display the list of ingredients.
  recipeListDiv.innerHTML = `
    <h3>Recipes you can make with:</h3>
    <ul>
      ${ingredientList.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
  `;
}
