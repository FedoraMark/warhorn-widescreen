const $calendar_document = document.querySelector("#events_schedule_monthly_show .document");

if ($calendar_document) {
  console.log("Stretching the Warhorn calender");
  $calendar_document.classList({
    "max-width": "unset",
    "margin": "0",
    "padding-left": "2rem",
    "padding-right": "2rem",
    "box-sizing": "border-box"
  });
}
