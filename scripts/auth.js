// scripts/auth.js
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    // Simulate auth logic
    localStorage.setItem("user", JSON.stringify({ email }));
    window.location.href = "dashboard.html";
  });
  