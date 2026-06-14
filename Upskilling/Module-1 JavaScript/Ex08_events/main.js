let all = [
  { name: "Jazz Night", cat: "Music", date: "2025-09-12" },
  { name: "Food Truck Rally", cat: "Food", date: "2025-09-20" },
  { name: "Watercolor Class", cat: "Art", date: "2025-10-04" },
  { name: "Morning Yoga", cat: "Wellness", date: "2025-10-15" },
  { name: "Drum Circle", cat: "Music", date: "2025-11-01" }
];

let cur = [...all];

function render(list) {
  let g = document.getElementById("grid");
  g.innerHTML = "";
  list.forEach(ev => {
    g.innerHTML += `
      <div class="ev-card">
        <h3>${ev.name}</h3>
        <p>${ev.cat} | ${ev.date}</p>
        <button onclick="reg('${ev.name}')">Register</button>
      </div>
    `;
  });
}

function reg(name) {
  let t = document.getElementById("toast");
  t.textContent = "Registered for " + name + "!";
  t.style.display = "block";
  setTimeout(() => t.style.display = "none", 2500);
}

function filterCat() {
  let val = document.getElementById("catFilter").value;
  cur = val === "all" ? [...all] : all.filter(e => e.cat === val);
  render(cur);
}

document.getElementById("search").onkeydown = function(e) {
  if (e.key === "Enter") {
    let q = this.value.toLowerCase();
    let res = cur.filter(ev => ev.name.toLowerCase().includes(q));
    render(res);
  }
};

render(all);
