function Event(name, date, seats, cat) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.cat = cat;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0 ? "Available (" + this.seats + " seats)" : "Full";
};

let ev1 = new Event("Jazz Night", "2025-09-12", 30, "Music");
let ev2 = new Event("Yoga Class", "2025-10-01", 0, "Wellness");
let ev3 = new Event("Pottery Workshop", "2025-11-05", 12, "Art");

let evList = [ev1, ev2, ev3];
let cards = document.getElementById("cards");

evList.forEach(ev => {
  let avail = ev.checkAvailability();
  let div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${ev.name}</h3>
    <p>Date: ${ev.date} | Category: ${ev.cat}</p>
    <p class="${ev.seats > 0 ? 'avail' : 'full'}">${avail}</p>
  `;
  cards.appendChild(div);
});

let entryOut = "";
Object.entries(ev1).forEach(([k, v]) => {
  entryOut += k + ": " + v + "\n";
});
document.getElementById("entries").textContent = entryOut;
