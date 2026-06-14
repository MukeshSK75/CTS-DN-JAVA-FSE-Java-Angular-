let events = [
  { name: "Rock Show", cat: "Music", date: "2025-09-14" },
  { name: "Baking Workshop", cat: "Food", date: "2025-10-02" },
  { name: "Jazz Evening", cat: "Music", date: "2025-10-18" },
  { name: "Painting Class", cat: "Art", date: "2025-11-01" }
];

function render(list) {
  let grid = document.getElementById("grid");
  grid.innerHTML = "";
  let cards = list.map(ev => `
    <div class="item">
      <span>${ev.cat}</span>
      ${ev.cat === "Food" ? "Workshop on " : ""}${ev.name}
      <small style="display:block;color:#888;margin-top:6px">${ev.date}</small>
    </div>
  `);
  grid.innerHTML = cards.join("");
}

function showAll() {
  render(events);
}

function showMusic() {
  let music = events.filter(ev => ev.cat === "Music");
  render(music);
}

function addNew() {
  events.push({ name: "New Comedy Night", cat: "Music", date: "2025-12-05" });
  render(events);
}

render(events);
