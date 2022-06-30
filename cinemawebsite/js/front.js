$(document).ready(function() {
    /*--
            Sliders
        -----------------------------------*/
    // Hero Slider
    $('.hero-slider').slick({
        infinite: true,
        fade: true,
        dots: false,
        prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
            }
        }, ]
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

    $(".down-inner").click(function() {
        $(this).next().slideToggle(400);
    })
});