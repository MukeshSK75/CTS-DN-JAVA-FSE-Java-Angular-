const name = "Street Food Festival";
const date = "2025-08-15";
let seats = 50;

document.getElementById("title").textContent = name;
document.getElementById("info").textContent = `Event: ${name} | Date: ${date}`;
document.getElementById("seats").textContent = seats;

function register() {
  if (seats > 0) {
    seats--;
    document.getElementById("seats").textContent = seats;
  }
}

function cancel() {
  seats++;
  document.getElementById("seats").textContent = seats;
}
