
$(function () {
  // Preeloader
  $('.preloader').preloadinator().delay(800).fadeOut(1000)
  //sticky menu
  $(window).on('scroll',function(){
    // let main = 0
    var main = $(this).scrollTop();
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
  //scroll-spy & Smooth-scrolling
  let scrollLink = $('.scroll-link');
    $(scrollLink).on('click',function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top-80},1000);
    });
    $(window).on('scroll',function(){
        let scrollTop = $(this).scrollTop();
        scrollLink.each(function(){
        let sectionhead = $(this.hash).offset().top-85;
        if(scrollTop >= sectionhead) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
        });
    });
  // Screenshot Slider
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



