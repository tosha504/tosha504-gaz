jQuery(document).ready(function($) {
  var typed = new Typed(".element", {
    strings: [" РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В РОССИИ"],
    typeSpeed: 70,
  });

   $(".question__title").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this)
        .removeClass("active")
        .next()
        .slideToggle(400);
    } else {
      $(".question__title")
        .removeClass("active")
        .next()
        .slideUp(400);
      $(this)
        .addClass("active")
        .next()
        .slideToggle(400);
    }
  });
});
