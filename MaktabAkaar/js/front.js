$(document).ready(function() {

    
    

    
    $('.about-slider .slider').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            slidesToScroll: 4,
            variableWidth: true,
            autoplay: true,
  autoplaySpeed: 2000
          });
                  
          

      $(".open-nav").click(function() {
        $(".mobile-nav").slideDown(400);
    })

    $(".close-nav").click(function() {
        $(".mobile-nav").slideUp(400);
    })

    $(".mobile-nav ul li").click(function() {
        $(".mobile-nav").slideUp(400);
    })


});