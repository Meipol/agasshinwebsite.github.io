"use strict";

console.log("Hello");
var isMobile = false;

if ($("#mobile-test").css("display") === "block") {
  isMobile = true;
}

console.log(isMobile);

if (!isMobile) {
  $(".flip-card").click(function () {
    $(".flip-card").removeClass("flip-card-flipped");
    $.each($(this)[0].classList, function (key, value) {
      if (value.indexOf("group-") === 0) {
        console.log("." + value);
        $("." + value).addClass("flip-card-flipped");
      }
    });
  });
  $(".flip-card").tilt({
    glare: true,
    maxGlare: 0.7
  });
} else {
  $(".flip-card").each(function (i) {
    var mycard = $(this);
    setTimeout(function () {
      mycard.addClass("flip-card-flipped");
    }, 1000 * i);
  });
}