let data = [
  { id: 1, name: "Street Food Fest", cat: "Food", seats: 20 },
  { id: 2, name: "Open Mic Night", cat: "Music", seats: 10 },
  { id: 3, name: "Sketch & Paint", cat: "Art", seats: 5 },
  { id: 4, name: "Yoga Sunrise", cat: "Wellness", seats: 8 }
];

let box = document.querySelector("#container");

function buildCards(list) {
  box.innerHTML = "";
  list.forEach(ev => {
    let card = document.createElement("div");
    card.className = "ev-card";
    card.id = "card-" + ev.id;

    let h = document.createElement("h3");
    h.textContent = ev.name;

    let p = document.createElement("p");
    p.textContent = `${ev.cat} | Seats: ${ev.seats}`;
    p.id = "p-" + ev.id;

    let btn = document.createElement("button");
    btn.textContent = "Register";
    btn.onclick = () => regUser(ev.id);

    card.appendChild(h);
    card.appendChild(p);
    card.appendChild(btn);
    box.appendChild(card);
  });
}

function regUser(id) {
  let ev = data.find(e => e.id === id);
  if (!ev || ev.seats === 0) return;
  ev.seats--;
  document.getElementById("p-" + id).textContent = `${ev.cat} | Seats: ${ev.seats}`;
  if (ev.seats === 0) {
    document.getElementById("card-" + id).classList.add("done");
  }
}

buildCards(data);
