$(document).ready(function() {


    $('.reviews-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    var width = $(window).width();

    if (width < 950) {
        $('.our-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });

    }


    $(window).resize(function(e) {

        var width = $(window).width();

        if (width < 950) {
            $('.our-slider').slick({
                dots: true,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000
            });

        }
    })




    $(".reviews-left").click(function() {
        $(".slick-prev").click();
    })

    $(".reviews-right").click(function() {
        $(".slick-next").click();
    })

    $(".slick-dots button").text("");



    $(".open-nav").click(function() {
        $(".mobile-nav").slideDown(400);
    })

    $(".close-nav").click(function() {
        $(".mobile-nav").slideUp(400);
    })

    $(".mobile-nav ul li").click(function() {
        $(".mobile-nav").slideUp(400);
    })

    $(".goup").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });



});