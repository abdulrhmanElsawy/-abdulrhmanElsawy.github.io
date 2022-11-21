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

    $('.rates-slider .slider').slick({
        dots: false,
        arrows:false,
        autoplay:true,
        autoplayspeed:2000,
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

    $(".questions .left .question h1").click(function(){
        $(this).toggleClass("active");
        $(this).next().slideToggle("300");
    })



});
