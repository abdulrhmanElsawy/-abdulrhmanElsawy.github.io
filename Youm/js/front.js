$(document).ready(function() {


    $(".open-nav").click(function() {
        $(".mobile-nav").slideDown(400);
    })

    $(".close-nav").click(function() {
        $(".mobile-nav").slideUp(400);
    })

    $(".mobile-nav ul li").click(function() {
        $(".mobile-nav").slideUp(400);
    })





    $('.reviews-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
         autoplay: true,
         autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });



});
