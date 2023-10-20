// AOS INITIALIZATION
AOS.init({
  offset: 250,
  duration: 500,
});

$(".reviews_details").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

// Rotate slider
$(function () {
  $(".reviews_details").rotateSlider({});
});
