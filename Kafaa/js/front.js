$(document).ready(function() {

    $('.landing-slider .slider').slick({
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000
    });


    $('.rates-slider .slider').slick({
        dots: false,
        infinite: true,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000
    });


    $(".rates .rates-popup .close-rates-pop").click(function(){
        $(".rates .rates-popup").fadeOut(400);
    });

    $(".rates .rates-popup .overlay").click(function(){
        $(".rates .rates-popup").fadeOut(400);
    });
    
    $(".add-rate").click(function(){
        $(".rates .rates-popup").fadeIn(400);
    })

    
    $(document).ready(function() {
        $(document).scroll(function () {
            var scroll = $(this).scrollTop();
            var topDist = $(".landing-section").position();
            if (scroll > topDist.top) {
                $('.lower-nav').css({"position":"fixed","top":"0","width":"100%","z-index":"80"});
                $("nav .lower-nav .lower-content .logo h1").css({"display":"none"});
            } else {
                $('.lower-nav').css({"position":"static","top":"auto"});
                $("nav .lower-nav .lower-content .logo h1").css({"display":"block"});
            }
        });
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