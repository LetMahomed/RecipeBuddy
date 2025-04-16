document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    localStorage.setItem("user", JSON.stringify({ email }));
    window.location.href = "dashboard.html";
  });
function handleSubmit(event) {
    event.preventDefault(); 
    
    
    window.location.href = "pantry.html"; 
  }
function handleSubmit(event) {
    event.preventDefault(); 
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "" || password === "") {
      alert("Please fill in both email and password.");
      return; 
    }
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return; 
    }
  
    window.location.href = "https://letmahomed.github.io/RecipeBuddy/pantry.html"; // Replace with your actual "Pantry" page URL
  }
  
  function toggleForm() {
    const formTitle = document.getElementById("form-title");
    const formDescription = document.getElementById("form-description");
    const form = document.getElementById("auth-form");
    const switchLink = document.querySelector(".switch-link");
    
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
  