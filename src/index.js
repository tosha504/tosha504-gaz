jQuery(document).ready(function($) {
  var typed = new Typed(".element", {
    strings: [" РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В РОССИИ"],
    typeSpeed: 70,
  });

  $(".question__title").on("click", function(event) {
    $(this)
      .toggleClass("active")
      .next()
      .slideToggle(300);
  });
});
