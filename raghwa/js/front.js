$(document).ready(function() {


    

    $('.partners-slider .slider').slick({
        dots: false,
        arrows:false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        autoplay:true,
        autoplayspeed:2000,
        variableWidth: true
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