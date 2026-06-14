let events = [
  { name: "Jazz Night", cat: "Music", date: "2025-09-12" },
  { name: "Food Crawl", cat: "Food", date: "2025-10-04" },
  { name: "Art Slam", cat: "Art", date: "2025-11-01" },
  { name: "Drum Circle", cat: "Music", date: "2025-11-15" }
];

$(document).ready(function() {
  events.forEach(ev => {
    let card = `
      <div class="ev-card">
        <h3>${ev.name}</h3>
        <p>${ev.cat} | ${ev.date}</p>
        <button class="regBtn" data-name="${ev.name}">Register</button>
      </div>
    `;
    $("#grid").append(card);
  });

  $(document).on("click", ".regBtn", function() {
    let name = $(this).data("name");
    $(this).text("Registered!").prop("disabled", true).css("background", "#27ae60");
  });

  $("#hideAll").click(function() {
    $(".ev-card").fadeOut(400);
  });

  $("#showAll").click(function() {
    $(".ev-card").fadeIn(400);
  });
});
