// Rotate slider
$(function () {
  $('.screenshot_wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true
  });

  //back to top
  $(".bottom_top_icon").click(function(){
    $('html,body').animate({scrollTop:0},1000);
  })
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
//preloader
$(window).on('load',function(){
  $('.preloader').delay(1000).fadeOut(300);
});
    
});
// AOS INITIALIZATION
AOS.init({
  offset: 250,
  duration: 500,
});



