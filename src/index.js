jQuery(document).ready(function($) {
  var typed = new Typed(".element", {
    strings: [" РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В РОССИИ"],
    typeSpeed: 70,
  });

  $(".question__title").on("click", function(event) {
    if ($(".question__items").hasClass("one")) {
      $(".question__title")
        .not($(this))
        .removeClass("active");
      $(".question__text")
        .not($(this))
        .slideUp(300);
    }
    $(this)
      .toggleClass("active")
      .next()
      .slideToggle(300);
  });
});