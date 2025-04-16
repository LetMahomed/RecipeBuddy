function getRecipes(ingredients) {
  
  const recipes = [
    { name: "Pasta Primavera", ingredients: ["pasta", "tomato", "garlic", "olive oil"] },
    { name: "Chicken Salad", ingredients: ["chicken", "lettuce", "tomato", "avocado"] },
    { name: "Vegetable Stir-Fry", ingredients: ["carrot", "broccoli", "garlic", "soy sauce"] },
  ];

  const availableRecipes = recipes.filter(recipe => 
    recipe.ingredients.every(ingredient => ingredients.includes(ingredient))
  );

  const recipeList = document.getElementById("recipe-list").querySelector("ul");
  recipeList.innerHTML = ''; 

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

const userEmail = localStorage.getItem("userEmail");
document.getElementById("user-email").textContent = userEmail || "Guest";

const pantryIngredients = ["pasta", "tomato", "garlic", "olive oil"]; 
getRecipes(pantryIngredients);
