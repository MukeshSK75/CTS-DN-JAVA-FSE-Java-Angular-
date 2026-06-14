let evList = [];

function addEvent() {
  let n = document.getElementById("evName").value;
  let c = document.getElementById("evCat").value;
  if (!n || !c) { show("Fill both fields"); return; }
  evList.push({ name: n, cat: c });
  show("Added: " + n + " [" + c + "]. Total: " + evList.length);
}

function makeCounter(cat) {
  let count = 0;
  return function() {
    count++;
    return cat + " registrations: " + count;
  };
}

let counters = {};

function registerUser() {
  let user = document.getElementById("userName").value;
  let cat = document.getElementById("catSelect").value;
  if (!user) { show("Enter your name"); return; }
  if (!counters[cat]) counters[cat] = makeCounter(cat);
  show("Registered " + user + " | " + counters[cat]());
}

function filterEventsByCategory(list, cb) {
  return list.filter(cb);
}

function doFilter() {
  let val = document.getElementById("filterCat").value.toLowerCase();
  let res = filterEventsByCategory(evList, ev => ev.cat.toLowerCase() === val);
  if (res.length === 0) { show("No events in category: " + val); return; }
  show("Found: " + res.map(e => e.name).join(", "));
}

function show(msg) {
  document.getElementById("output").textContent = msg;
}
