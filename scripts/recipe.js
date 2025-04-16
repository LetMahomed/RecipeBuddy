// Function to get recipes based on ingredients
function getRecipes(ingredients) {
  // In a real-world scenario, you would use an API to fetch recipes
  // This is a simplified mock of recipe data
  const recipes = [
    { name: "Pasta Primavera", ingredients: ["pasta", "tomato", "garlic", "olive oil"] },
    { name: "Chicken Salad", ingredients: ["chicken", "lettuce", "tomato", "avocado"] },
    { name: "Vegetable Stir-Fry", ingredients: ["carrot", "broccoli", "garlic", "soy sauce"] },
  ];

  // Filter recipes based on pantry ingredients
  const availableRecipes = recipes.filter(recipe => 
    recipe.ingredients.every(ingredient => ingredients.includes(ingredient))
  );

  // Display available recipes
  const recipeList = document.getElementById("recipe-list").querySelector("ul");
  recipeList.innerHTML = ''; // Clear any previous results

  if (availableRecipes.length > 0) {
    availableRecipes.forEach(recipe => {
      const li = document.createElement("li");
      li.textContent = recipe.name;
      recipeList.appendChild(li);
    });
  } else {
    recipeList.innerHTML = '<li>No recipes available with the selected ingredients.</li>';
  }
}

// Assuming the email is stored in localStorage from the pantry page
const userEmail = localStorage.getItem("userEmail");
document.getElementById("user-email").textContent = userEmail || "Guest";

// Example: simulate user input from pantry page (in a real app, this would be dynamic)
const pantryIngredients = ["pasta", "tomato", "garlic", "olive oil"]; // You can replace this with actual pantry data

// Get and display the recipes
getRecipes(pantryIngredients);
