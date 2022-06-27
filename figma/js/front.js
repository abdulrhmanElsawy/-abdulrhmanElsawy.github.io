$(document).ready(function() {


    let navToggle = document.querySelector('.nav-toggle')
    let bars = document.querySelectorAll('.bar')

    function toggleHamburger(e) {
        bars.forEach(bar => bar.classList.toggle('x'))
    }

    navToggle.addEventListener('click', toggleHamburger)


    if ($(".landing").length) {

        $('.slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });


        $(".slick-prev-shadow").click(function() {
            $(".slick-prev").click();
        })

        $(".slick-next-shadow").click(function() {
            $(".slick-next").click();
        })

        $(".refrence .slick-dots  li button").text("");

        $(".about-content>div>h1").click(function() {
            $(this).next().next().slideToggle(400);
        })

    }


    if ($(".omne-page").length) {
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            autoplaySpeed: 2000
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            autoplaySpeed: 2000
        });



    }



    if ($(".sluzby-page").length) {
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
            autoplaySpeed: 2000
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider',
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            autoplaySpeed: 2000
        });



    }


    if ($(".blog-page").length) {
        $('.blog-slider').slick({
            dots: true,
            arrows: false,
            speed: 500,
        });
    }

    if ($(".praxe").length) {
        $('.blog-slider').slick({
            dots: false,
            arrows: true,
            speed: 500,
        });

        $(".slick-prev-shadow").click(function() {
            $(".slick-prev").click();
        })

        $(".slick-next-shadow").click(function() {
            $(".slick-next").click();
        })
    }



    if ($(".sluzby-page").length) {
        $(".about-content>div>h1").click(function() {
            $(this).next().next().slideToggle(400);
        })


    }


});