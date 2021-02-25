// Responsive Nao Calendar
$(".calendar").calendar({
  date: new Date(),
  autoSelect: false, // false by default
  select: function (date) {
    console.log("SELECT", date);
  },
  toggle: function (y, m) {
    console.log("TOGGLE", y, m);
  },
});

// drag drop file form
function getFileName() {
  var filename = document.getElementById("entry_value");
  document.getElementById("fileName").innerHTML = filename.value
    .split("\\")
    .pop();
}

// Sidebar
$(".sidebarTrigger").click(function () {
  if ($(".sidebarTrigger .closex").hasClass("hide")) {
    $("#sidebar").addClass("active");
    $(".sidebarTrigger .closex").removeClass("hide");
    $(".sidebarTrigger .menu").addClass("hide");
  } else {
    $("#sidebar").removeClass("active");
    $(".sidebarTrigger .closex").addClass("hide");
    $(".sidebarTrigger .menu").removeClass("hide");
  }
});
$(document).mouseup(function (e) {
  var container = $("#sidebar");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $("#sidebar").removeClass("active");
    $(".sidebarTrigger .closex").addClass("hide");
    $(".sidebarTrigger .menu").removeClass("hide");
  }
});

// Chat
$(".messages-box a.list-group-item").click(function () {
  $(".chat .rightChat").css("display", "unset");
  $(".chat .leftChat").css("display", "none");
});
$(".chatTrigger").click(function () {
  $(".chat .rightChat").css("display", "none");
  $(".chat .leftChat").css("display", "unset");
});
