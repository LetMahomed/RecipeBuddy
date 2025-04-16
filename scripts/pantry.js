// pantry.js

document.getElementById('pantry-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the entered ingredients
  const pantryInput = document.getElementById('pantry-input').value.trim();
  
  if (pantryInput) {
    // Clean up the input and create a query parameter string
    const ingredients = pantryInput.split(',').map(item => item.trim()).join(',');

    // Redirect to the recipes page with the ingredients in the URL
    window.location.href = `https://letmahomed.github.io/RecipeBuddy/recipes.html?ingredients=${encodeURIComponent(ingredients)}`;
  }
});
