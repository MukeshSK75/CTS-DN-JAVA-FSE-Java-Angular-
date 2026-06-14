function setStatus(msg, cls) {
  let el = document.getElementById("status");
  el.textContent = msg;
  el.className = cls;
  el.style.display = "block";
}

async function submit() {
  let nm = document.getElementById("nm").value.trim();
  let em = document.getElementById("em").value.trim();
  let ev = document.getElementById("ev").value;

  if (!nm || !em) { setStatus("Please fill all fields", "fail"); return; }

  setStatus("Submitting...", "wait");

  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nm, email: em, event: ev })
    });

    let data = await res.json();

    setTimeout(() => {
      setStatus(`Registered! Confirmation ID: ${data.id}`, "ok");
    }, 1000);

  } catch(err) {
    setStatus("Submission failed: " + err.message, "fail");
  }
}
