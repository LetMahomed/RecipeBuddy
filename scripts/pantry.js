
document.getElementById('pantry-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const pantryInput = document.getElementById('pantry-input').value.trim();
  
  if (pantryInput) {
    const ingredients = pantryInput.split(',').map(item => item.trim()).join(',');

    window.location.href = `https://letmahomed.github.io/RecipeBuddy/recipe.html?ingredients=${encodeURIComponent(ingredients)}`;
  }
});

    function submitIngredients() {
      const ingredients = document.getElementById('ingredients').value;

      if (!ingredients) {
        alert('Please enter at least one ingredient.');
        return;
      }

      const ingredientsEncoded = encodeURIComponent(ingredients); // Encode for URL
      window.location.href = `recipes.html?ingredients=${ingredientsEncoded}`;
    }
