$(document).ready(function() {

    $(".open-nav").click(function() {
        $(".mobile-nav").slideDown(400);
    })

    $(".close-nav").click(function() {
        $(".mobile-nav").slideUp(400);
    })

    $(".down-inner").click(function() {
        $(this).next().slideToggle(400);
    })




    if ($(".reviews").length) {
        $('.clients').slick({
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
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
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        function clickbutton() {
            $(".clients .slick-next").click();
        }


        setInterval(clickbutton, 4000);



    }


    if ($("#phone").length) {
        var input = document.querySelector("#phone");
        window.intlTelInput(input);
        var input = document.querySelector("#phone");
        intlTelInput(input, {
            utilsScript: "js/utils.js"
        });

        var input = document.querySelector("#phone");
        intlTelInput(input, {
            initialCountry: "auto",
            geoIpLookup: function(success, failure) {
                $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    success(countryCode);
                });
            },
            utilsScript: "js/utils.js"
        });
    }

    if ($(".section-reviews".length)) {
        $('.section-reviews').slick({
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToScroll: 3,

            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
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

    }



    if ($(".rms-pos-pages").length) {

        $(".controles #page-1").click(function() {
            let controlesarray = document.querySelectorAll(".controles button");
            controlesarray.forEach(element => {
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            });

            $(this).addClass("active");

            let pagesArray = document.querySelectorAll(".rms-pos-pages>div");
            pagesArray.forEach(element => {
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            });

            $(".page-1").addClass("active");



        });


        $(".controles #page-2").click(function() {
            let controlesarray = document.querySelectorAll(".controles button");
            console.log(controlesarray);
            controlesarray.forEach(element => {
                console.log(element.getAttribute("class"));
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            });

            $(this).addClass("active");
            let pagesArray = document.querySelectorAll(".rms-pos-pages>div");
            pagesArray.forEach(element => {
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            });

            $(".page-2").addClass("active");



        });


        $(".controles #page-3").click(function() {
            let controlesarray = document.querySelectorAll(".controles button");
            console.log(controlesarray);
            controlesarray.forEach(element => {
                console.log(element.getAttribute("class"));
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            });

            $(this).addClass("active");
            let pagesArray = document.querySelectorAll(".rms-pos-pages>div");
            pagesArray.forEach(element => {
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            });

            $(".page-3").addClass("active");



        });

        $(".controles #page-4").click(function() {
            let controlesarray = document.querySelectorAll(".controles button");
            console.log(controlesarray);
            controlesarray.forEach(element => {
                console.log(element.getAttribute("class"));
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            });

            $(this).addClass("active");
            let pagesArray = document.querySelectorAll(".rms-pos-pages>div");
            pagesArray.forEach(element => {
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            });

            $(".page-4").addClass("active");



        });


    }


    if ($(".enterprise-page").length) {
        $('.clients').slick({
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
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
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

        // function clickbutton() {
        //     $(".clients .slick-next").click();
        // }


        // setInterval(clickbutton, 4000);
    }


    if ($(".referral-page .questions").length) {
        $(".referral-page .questions .content h1").click(function() {
            $(this).toggleClass("active");
            $(this).next().slideToggle(300);

        })
    }


    if ($(".pricing-page").length) {
        $(".switch").click(function() {
            $(".switch .white-circle").toggleClass("active");
            $(".switch").toggleClass("active");

            if ($(".switch").hasClass("active")) {

                $(".price-two-price").text("417 ر.س. شهريًا");
                $(".price-three-price").text("375 ر.س. شهريًا");
                $(".price-four-price").text("199 ر.س. شهريًا");


                $(".price-two-detail").text("تدفع سنوياًغير شامل للضريبة");
                $(".price-three-detail").text("تدفع سنوياًغير شامل للضريبة");
                $(".price-four-detail").text("تدفع سنوياًغير شامل للضريبة");

            } else {
                $(".price-two-price").text("449 ر.س. شهريًا");
                $(".price-three-price").text("409 ر.س. شهريًا");
                $(".price-four-price").text("219 ر.س. شهريًا");


                $(".price-two-detail").text("غير شامل للضريبة");
                $(".price-three-detail").text("غير شامل للضريبة");
                $(".price-four-detail").text("غير شامل للضريبة");
            }
        })
    }


});