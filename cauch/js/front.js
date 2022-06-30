$(document).ready(function() {

    var typed = new Typed(".auto-type", {
        strings: ["أنا أؤمن بأن كل انسان مولود ولديه من المواهب والابداعات الكافية لعيش حياة كريمة، ومهمتي هي اكتشافها وتحويلها إلى أسلوب حياة، لأن من حق كل إنسان أن يعيش الحياة التي يحبها ويعمل في مجال يسعده. لكي نحيا حياة مرضية وتحققوا غاياتكم من خلال رحلة اكتشاف أنفسكم وقدراتكم وضع خطة للوصول اليها. كمدرب ممارس معتمد من الاتحاد الدولي للتدريب (ICF) المدرب عمر بغدادي يشكل مستقبلكم والتغلب على مخاوفكم بتقنيات عالمية لتحققو أحلامكم."],
        typeSpeed: 40,
        backSpeed: 40,
        loop: false
    })


    let navToggle = document.querySelector('.nav-toggle')
    let bars = document.querySelectorAll('.bar')

    function toggleHamburger(e) {
        bars.forEach(bar => bar.classList.toggle('x'))
    }

    navToggle.addEventListener('click', toggleHamburger)


    $(".programs-section .program-content h1").click(function() {
        $(this).next().slideToggle(400);
    });

    $(".open-inner-content").click(function() {
        $(this).next().fadeIn(400);
    })

    $(".close-inner-content").click(function() {
        $(".inner-content").fadeOut(400);
    })



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



    $(document).scroll(function() {
        var scroll = $(this).scrollTop();
        var topDist = $(".landing-section").position();
        if (scroll > topDist.top) {
            $('.lower-nav').css({ "position": "fixed", "top": "0" });
        } else {
            $('.lower-nav').css({ "position": "relative", "top": "auto" });
        }
    });



});