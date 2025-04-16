// scripts/auth.js
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    // Simulate auth logic
    localStorage.setItem("user", JSON.stringify({ email }));
    window.location.href = "dashboard.html";
  });
  // Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Perform any form validation or authentication here
    
    // Redirect to the "Pantry" page after successful login (replace with your actual page URL)
    window.location.href = "pantry.html"; // Replace "pantry.html" with the correct path if needed
  }
  // Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Simple validation for email and password
    if (email === "" || password === "") {
      alert("Please fill in both email and password.");
      return; // Don't redirect if validation fails
    }
  
    // Optionally, you can add more validation for the email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return; // Don't redirect if email format is invalid
    }
  
    // If all is valid, redirect to the "Pantry" page
    window.location.href = "https://letmahomed.github.io/RecipeBuddy/pantry.html"; // Replace with your actual "Pantry" page URL
  }
  
  // Toggle between Login and Sign-Up
  function toggleForm() {
    const formTitle = document.getElementById("form-title");
    const formDescription = document.getElementById("form-description");
    const form = document.getElementById("auth-form");
    const switchLink = document.querySelector(".switch-link");
    
    // Check if it's currently the login form
    if (formTitle.textContent === "Login") {
      formTitle.textContent = "Sign Up";
      formDescription.textContent = "Please fill in your details to create an account.";
      switchLink.textContent = "Already have an account? Login";
      form.querySelector("button").textContent = "Sign Up"; // Change button text
    } else {
      formTitle.textContent = "Login";
      formDescription.textContent = "Please enter your credentials to continue.";
      switchLink.textContent = "Don't have an account? Sign up";
      form.querySelector("button").textContent = "Login"; // Change button text
    }
  }
  