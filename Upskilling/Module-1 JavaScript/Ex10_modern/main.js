const events = [
  { name: "Jazz Night", cat: "Music", seats: 30 },
  { name: "Food Crawl", cat: "Food", seats: 0 },
  { name: "Art Slam", cat: "Art", seats: 12 }
];

function fmt(ev, label = "Event") {
  const { name, cat, seats } = ev;
  return `${label}: ${name} | ${cat} | ${seats} seats`;
}

function runDemo() {
  let logs = [];

  const copy = [...events];
  copy.push({ name: "New Dance Show", cat: "Dance", seats: 25 });

  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  copy.forEach(ev => {
    const { name, cat, seats } = ev;
    grid.innerHTML += `
      <div class="card">
        <h3>${name}</h3>
        <p>${cat} | ${seats} seats</p>
      </div>
    `;
    logs.push(fmt(ev));
  });

  document.getElementById("log").textContent = logs.join("\n");
}
