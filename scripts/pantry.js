// scripts/pantry.js
const form = document.getElementById("pantry-form");
const list = document.getElementById("pantry-list");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const item = document.getElementById("item").value;
  const pantry = JSON.parse(localStorage.getItem("pantry")) || [];
  pantry.push(item);
  localStorage.setItem("pantry", JSON.stringify(pantry));
  renderPantry();
});

function renderPantry() {
  const pantry = JSON.parse(localStorage.getItem("pantry")) || [];
  list.innerHTML = pantry.map(i => `<li>${i}</li>`).join("");
}

document.addEventListener("DOMContentLoaded", renderPantry);
