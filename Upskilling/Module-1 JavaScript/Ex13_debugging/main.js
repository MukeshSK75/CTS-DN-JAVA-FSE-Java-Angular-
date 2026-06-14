let logs = [];

function log(msg) {
  logs.push("[LOG] " + msg);
  document.getElementById("logBox").textContent = logs.join("\n");
  console.log(msg);
}

function tryRegister() {
  logs = [];
  let nm = document.getElementById("nm").value.trim();
  let em = document.getElementById("em").value.trim();

  log("Form submit started");
  log("Name: " + (nm || "(empty)"));
  log("Email: " + (em || "(empty)"));

  let payload = { name: nm, email: em };
  log("Payload: " + JSON.stringify(payload));

  if (!nm || !em) {
    log("Validation FAILED - missing fields");
    document.getElementById("status").textContent = "Fill all fields!";
    document.getElementById("status").style.color = "red";
    return;
  }

  log("Validation passed");
  log("Sending fetch POST...");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" }
  })
    .then(r => r.json())
    .then(d => {
      log("Server response ID: " + d.id);
      document.getElementById("status").textContent = "Success! ID: " + d.id;
      document.getElementById("status").style.color = "green";
    })
    .catch(err => log("Fetch error: " + err.message));
}

function buggyRegister() {
  logs = [];
  log("Buggy register called");
  try {
    let bad = undefined;
    log("Trying: " + bad.name);
  } catch(e) {
    log("CAUGHT ERROR: " + e.message);
    log("Fix: always check if object is defined before accessing properties");
    document.getElementById("status").textContent = "Bug caught! Check log above.";
    document.getElementById("status").style.color = "#e67e22";
  }
}
