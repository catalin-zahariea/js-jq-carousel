// -------------------------------
// Esercizio: js-jq-carousel
//
// Slider replicate with working arrow buttons that scrolls indefinetely.
// Using jQuery.
// -------------------------------

// Making the arrows clickable and assigning the function to sroll.
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
// RIGHT ARROW
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

var arrowRight = $(".arrow.right");
arrowRight.click(function () {
  var activeImg = $(".slider-images .active");
  activeImg.removeClass("active");

  //-------------------------------
  // TOP POINTER
  var activePointer = $(".slider-pointer .active-pointer");
  activePointer.removeClass("active-pointer");

  if (activeImg.hasClass("last")) {
    $(".slider-images .first").addClass("active");
    //-------------------------------
    // TOP POINTER
    $(".slider-pointer .first").addClass("active-pointer");
  } else {
    activeImg.next().addClass("active");
    //-------------------------------
    // TOP POINTER
    activePointer.next().addClass("active-pointer");
  }

  //-------------------------------
  // RIGHT SIDE
  // -------------------------------
  var activeRight = $(".slider-images .right-side");
  activeRight.removeClass("right-side");

  if (activeRight.hasClass("last")) {
    $(".slider-images .first").addClass("right-side");
  } else {
    activeRight.next().addClass("right-side");
  }

  //-------------------------------
  // LEFT SIDE
  // -------------------------------
  var activeLeft = $(".slider-images .left-side");
  activeLeft.removeClass("left-side");

  if (activeLeft.hasClass("last")) {
    $(".slider-images .first").addClass("left-side");
  } else {
    activeLeft.next().addClass("left-side");
  }
});

//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
// LEFT ARROW
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

var arrowLeft = $(".arrow.left");
arrowLeft.click(function () {
  var activeImg = $(".slider-images .active");
  activeImg.removeClass("active");

  //-------------------------------
  // TOP POINTER
  var activePointer = $(".slider-pointer .active-pointer");
  activePointer.removeClass("active-pointer");

  if (activeImg.hasClass("first")) {
    $(".slider-images .last").addClass("active");
    //-------------------------------
    // TOP POINTER
    $(".slider-pointer .last").addClass("active-pointer");
  } else {
    activeImg.prev().addClass("active");
    //-------------------------------
    // TOP POINTER
    activePointer.prev().addClass("active-pointer");
  }

  //-------------------------------
  // RIGHT SIDE
  // -------------------------------
  var activeRight = $(".slider-images .right-side");
  activeRight.removeClass("right-side");

  if (activeRight.hasClass("first")) {
    $(".slider-images .last").addClass("right-side");
  } else {
    activeRight.prev().addClass("right-side");
  }

  //-------------------------------
  // LEFT SIDE
  // -------------------------------
  var activeLeft = $(".slider-images .left-side");
  activeLeft.removeClass("left-side");

  if (activeLeft.hasClass("first")) {
    $(".slider-images .last").addClass("left-side");
  } else {
    activeLeft.prev().addClass("left-side");
  }
});
