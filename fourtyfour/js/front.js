$(document).ready(function() {

    if ((".contact-form").length) {
        $(".close-contact-form").click(function() {
            $(".contact-form").slideUp(400);
        })

        $(".open-contact-form").click(function() {
            $(".contact-form").slideDown(400);
        })
    }



    $(".open-nav").click(function() {
        $(".mobile-nav").slideDown(400);
    })

    $(".close-nav").click(function() {
        $(".mobile-nav").slideUp(400);
    })

    $(".mobile-nav ul li").click(function() {
        $(".mobile-nav").slideUp(400);
    })



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


    if ($(".landing").length) {
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




    $("#downloadprofile").click(function() {
        fetch('../files/profile- Forty Four_compressed-1.pdf')
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // the filename you want
                a.download = 'CompanyProfile.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                alert('your file has downloaded!'); // or you know, something with better UX...
            })
            .catch(() => alert('oh no!'));
    })



    // $('.slider-2').slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToScroll: 3,
    //     centerMode: false,
    //     centerPadding: '60px',
    //     slidesToShow: 6,
    //     arrows: false,
    //     responsive: [{
    //             breakpoint: 768,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 slidesToScroll: 2,
    //                 centerPadding: '40px',
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 arrows: false,
    //                 centerMode: true,
    //                 slidesToScroll: 3,
    //                 centerPadding: '40px',
    //                 slidesToShow: 2
    //             }
    //         }
    //     ]
    // });

    // if ($(".images-popup").length) {
    //     $(".close-image").click(function() {
    //         $(".images-popup").fadeOut(400);
    //     });

    //     $(".menu-items img").click(function() {
    //         $(".images-popup img").attr("src", $(this).attr("src"));
    //         $(".images-popup p").text($(this).next().next().text());
    //         $(".images-popup").fadeIn(400);

    //     })


    // }



    // if ($(".testimonials-carousel").length > 0) {
    //     var j2 = new Swiper(".testimonials-carousel .swiper-container", {
    //         preloadImages: false,
    //         slidesPerView: 1,
    //         spaceBetween: 20,
    //         loop: true,
    //         grabCursor: true,
    //         mousewheel: false,
    //         centeredSlides: true,
    //         pagination: {
    //             el: '.tc-pagination',
    //             clickable: true,
    //             dynamicBullets: true,
    //         },
    //         navigation: {
    //             nextEl: '.listing-carousel-button-next',
    //             prevEl: '.listing-carousel-button-prev',
    //         },
    //         breakpoints: {
    //             1024: {
    //                 slidesPerView: 3,
    //             },

    //         }
    //     });
    // }





});