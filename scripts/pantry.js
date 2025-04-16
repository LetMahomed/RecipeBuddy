// On the pantry page, when the user submits the pantry input, redirect to recipes page
document.getElementById('pantry-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the pantry input value (ingredients the user has)
  const pantryInput = document.getElementById('pantry-input').value.trim();
  
  if (pantryInput) {
    // Store the pantry items and email in localStorage (from previous login)
    const pantryItems = pantryInput.split(',').map(item => item.trim());
    const email = localStorage.getItem('email');  // Assuming email was saved in localStorage during login
    
    localStorage.setItem('pantryItems', JSON.stringify(pantryItems));
    localStorage.setItem('email', email);
    
    // Redirect to the recipes page
    window.location.href = 'recipes.html';
  }
});
