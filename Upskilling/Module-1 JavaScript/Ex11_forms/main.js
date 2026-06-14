let form = document.getElementById("regForm");

function showErr(id, inputId, show) {
  let msg = document.getElementById(id);
  let inp = document.getElementById(inputId);
  msg.style.display = show ? "block" : "none";
  inp && (inp.className = show ? "err-field" : "");
}

form.onsubmit = function(e) {
  e.preventDefault();

  let els = form.elements;
  let name = els["uname"].value.trim();
  let email = els["email"].value.trim();
  let ev = els["event"].value;

  let valid = true;

  if (!name) { showErr("nameErr", "uname", true); valid = false; }
  else showErr("nameErr", "uname", false);

  let emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) { showErr("emailErr", "email", true); valid = false; }
  else showErr("emailErr", "email", false);

  if (!ev) { showErr("evErr", "evSel", true); valid = false; }
  else showErr("evErr", "evSel", false);

  if (!valid) return;

  let s = document.getElementById("success");
  s.style.display = "block";
  s.textContent = `Thanks ${name}! Registered for "${ev}" — check ${email}`;
  form.reset();
};
