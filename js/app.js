$(function () {
  $('.preloader').preloadinator().delay(700).fadeOut(700)
});

$(function () {
  //preloader
  // $(window).on('load',function(){
  //   $('.preloader').delay(700).fadeOut(300);
  // });

  $('.screenshot_wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  //sticky menu
  $(window).on('scroll',function(){
    let main = 0
    main = $(this).scrollTop();
    if(main > 250){
      $(".navbar").addClass("xyz")
    }else{
      $(".navbar").removeClass("xyz")
    }
    if(main > 300){
      $('.bottom_top_icon').fadeIn(300);
    }
    else{
      $('.bottom_top_icon').fadeOut(300);
    }
  });
  //Venobox js
  $('.venobox').venobox();
  // Counter part
  $('.counter').counterUp({
    delay: 60,
    time: 2000
  });
  //back to top
  $(".bottom_top_icon").click(function(){
    $('html,body').animate({scrollTop:0},1000);
  })
  // AOS INITIALIZATION
  AOS.init({
    offset: 250,
    duration: 500,
  });

});



