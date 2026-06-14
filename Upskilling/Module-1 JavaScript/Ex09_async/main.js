const API = "https://jsonplaceholder.typicode.com/posts?_limit=6";

function render(items) {
  let g = document.getElementById("grid");
  g.innerHTML = items.map(it => `
    <div class="ev-card">
      <h3>${it.title.slice(0, 40)}...</h3>
      <p>Event ID: ${it.id}</p>
    </div>
  `).join("");
}

function setSpinner(on) {
  document.getElementById("spinner").style.display = on ? "block" : "none";
}

function loadWithPromise() {
  setSpinner(true);
  document.getElementById("grid").innerHTML = "";
  fetch(API)
    .then(res => res.json())
    .then(data => {
      setSpinner(false);
      render(data);
    })
    .catch(err => {
      setSpinner(false);
      document.getElementById("grid").innerHTML = `<p class="err">Failed: ${err.message}</p>`;
    });
}

async function loadWithAsync() {
  setSpinner(true);
  document.getElementById("grid").innerHTML = "";
  try {
    let res = await fetch(API);
    let data = await res.json();
    setSpinner(false);
    render(data);
  } catch(err) {
    setSpinner(false);
    document.getElementById("grid").innerHTML = `<p class="err">Error: ${err.message}</p>`;
  }
}
