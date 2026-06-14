let events = [
  { name: "Food Fest", date: "2025-09-10", seats: 20, past: false },
  { name: "Old Concert", date: "2024-01-01", seats: 0, past: true },
  { name: "Art Show", date: "2025-10-05", seats: 15, past: false },
  { name: "Baking Class", date: "2025-11-20", seats: 0, past: false }
];

let container = document.getElementById("list");

events.forEach(function(ev) {
  if (ev.past || ev.seats === 0) return;

  try {
    if (!ev.name) throw new Error("Event name missing");

    let div = document.createElement("div");
    div.className = "event";
    div.innerHTML = `<h3>${ev.name}</h3><p>Date: ${ev.date} | Seats: ${ev.seats}</p>`;
    container.appendChild(div);
  } catch(e) {
    let err = document.createElement("p");
    err.className = "err";
    err.textContent = "Error: " + e.message;
    container.appendChild(err);
  }
});
