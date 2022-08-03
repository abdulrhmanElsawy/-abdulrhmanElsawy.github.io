$(document).ready(function() {



    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 3,
        centerMode: false,
        centerPadding: '60px',
        slidesToShow: 6,
        arrows: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToScroll: 2,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToScroll: 3,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    });

    if ($(".images-popup").length) {
        $(".close-image").click(function() {
            $(".images-popup").fadeOut(400);
        });

        $(".menu-items img").click(function() {
            $(".images-popup img").attr("src", $(this).attr("src"));
            $(".images-popup p").text($(this).next().next().text());
            $(".images-popup").fadeIn(400);

        })


    }



    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },

            }
        });
    }



});