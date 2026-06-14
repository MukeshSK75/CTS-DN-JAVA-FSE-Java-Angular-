console.log("Welcome to the Community Portal");

window.onload = function() {
  alert("Page fully loaded!");
  document.getElementById("msg").textContent = "Portal is ready.";
};

function greet() {
  console.log("User clicked greet button");
  document.getElementById("msg").textContent = "Hello from the Community Portal!";
}
