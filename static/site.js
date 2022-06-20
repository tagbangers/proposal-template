const $main = $("main");

$("#nav-switch").on("click", () => {
  $main.toggleClass("with-index");
});
