// -------------------------------
// Esercizio: js-jq-carousel
//
// Slider replicate with working arrow buttons that scrolls indefinetely.
// Using jQuery.
// -------------------------------

// Making the arrows clickable and assigning the function to sroll.
//-------------------------------
// RIGHT ARROW
// -------------------------------

var arrowRight = $(".arrow.right");
arrowRight.click(function () {
  var activeImg = $(".slider-images > .active");
  activeImg.removeClass("active");

  if (activeImg.hasClass("last")) {
    $(".slider-images > .first").addClass("active");
  } else {
    activeImg.next().addClass("active");
  }
});

//-------------------------------
// LEFT ARROW
// -------------------------------

var arrowLeft = $(".arrow.left");
arrowLeft.click(function () {
  var activeImg = $(".slider-images > .active");
  activeImg.removeClass("active");

  if (activeImg.hasClass("first")) {
    $(".slider-images > .last").addClass("active");
  } else {
    activeImg.prev().addClass("active");
  }
});
