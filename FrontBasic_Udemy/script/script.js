function menuFn(x) {
  x.classList.toggle("change");
}

$(document).ready(function () {
  $(".burguer-container").on("click", function () {
    $(".main-navigation").toggle("slow");
  });
});
