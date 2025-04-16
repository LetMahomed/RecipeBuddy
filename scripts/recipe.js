// On the recipes page, get the user's pantry items and display recipes
window.onload = function() {
  // Retrieve pantry items and email from localStorage
  const pantryItems = JSON.parse(localStorage.getItem('pantryItems')) || [];
  const email = localStorage.getItem('email');
  
  // Display thank you message with the user's email
  const thankYouMessage = document.getElementById('thank-you-message');
  thankYouMessage.textContent = `Thank you for using Recipe Buddy, ${email}!`;
  
  // In a real-world scenario, here we would query an API to fetch recipes based on the pantry items
  // For now, we will mock a few sample recipes
  
  const sampleRecipes = [
    { name: 'Chicken Salad', ingredients: ['chicken', 'lettuce', 'tomatoes', 'onions'] },
    { name: 'Tomato Soup', ingredients: ['tomatoes', 'onions', 'garlic'] },
    { name: 'Grilled Chicken', ingredients: ['chicken', 'garlic', 'olive oil'] },
  ];
  
  // Filter recipes based on pantry items
  const matchingRecipes = sampleRecipes.filter(recipe =>
    recipe.ingredients.every(ingredient => pantryItems.includes(ingredient))
  );
  
  // Display matching recipes
  const recipeList = document.getElementById('recipe-list');
  
  if (matchingRecipes.length > 0) {
    matchingRecipes.forEach(recipe => {
      const recipeElement = document.createElement('div');
      recipeElement.classList.add('recipe');
      recipeElement.innerHTML = `<h3>${recipe.name}</h3><p>Ingredients: ${recipe.ingredients.join(', ')}</p>`;
      recipeList.appendChild(recipeElement);
    });
  } else {
    recipeList.innerHTML = '<p>No recipes found with the ingredients you have.</p>';
  }
};
