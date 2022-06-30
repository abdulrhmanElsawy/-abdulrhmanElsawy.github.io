$(document).ready(function() {
    if ($(".landing-slider").length) {
        $('.landing-slider').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000
        });


        $(".slick-prev").text("");
        $(".slick-next").text("");






        $(".arrow-green").mouseover(function() {
            $(".question").css({ display: "block" });
            $(this).css({ bottom: -150, height: "50%" })
            $(document).scrollTop($(document).height());
        });



        $(".arrow-green").mouseout(function() {


            if ($('.question button:hover').length != 0) {
                // do something ;)
            } else {

                $(document).scrollTop(0)

                setTimeout(xr, 2000);
                setTimeout(zr, 2000);
            }

        });



        function xr() {
            $(".arrow-green").css({ bottom: 0, height: "30%" })
        }

        function zr() {
            $(".question").css({ display: "none" })
        }




        $("#open-secondPage").click(function() {
            $(".second-page").css({ display: "block" });
            $(document).scrollTop($(document).height());


            $(".landing").css({ display: "none" })
            $("nav").css({ display: "none" })
            $(".side-nav").css({ display: "none" })


            $(".text-content .ways h2").fadeIn(400);
            $(".text-content .ways img").fadeIn(400);

            $(".text-content h1").fadeIn(400);

            $(".text-content .shortlinks a span").fadeIn(400);
            $(".text-content .shortlinks a i").fadeIn(400);
            $(".text-content .shortlinks a img").fadeIn(400);
            leftGreenHeight();

            setTimeout(bottomGreenWidth, 1000);

            setTimeout(rightGreenHeight, 2000);

            $(".second-page .up-down").delay(3000).slideDown(400);




            function leftGreenHeight() {
                $(".left-green").css({ height: "100%" })
            }

            function bottomGreenWidth() {
                $(".bottom-green").css({ width: "100%" })
            }

            function rightGreenHeight() {
                $(".right-green").css({ height: "100%" })
            }


        });


        $("#open-firstPage").click(function() {
            $(".landing").css({ display: "block" });
            $("nav").css({ display: "block" })
            $(".side-nav").css({ display: "block" })
            $(document).scrollTop(0);
            $(".second-page").css({ display: "none" });



            $(".text-content .ways h2").fadeOut(400);
            $(".text-content .ways img").fadeOut(400);

            $(".text-content h1").fadeOut(400);

            $(".text-content .shortlinks a span").fadeOut(400);
            $(".text-content .shortlinks a i").fadeOut(400);
            $(".text-content .shortlinks a img").fadeOut(400);
            leftGreenHeight();

            setTimeout(bottomGreenWidth, 100);

            setTimeout(rightGreenHeight, 100);

            $(".second-page .up-down").delay(300).slideUp(400);




            function leftGreenHeight() {
                $(".left-green").css({ height: "0%" })
            }

            function bottomGreenWidth() {
                $(".bottom-green").css({ width: "0%" })
            }

            function rightGreenHeight() {
                $(".right-green").css({ height: "0%" })
            }
        })


        $(".close-nav").click(function() {
            $(".small-nav-elements").slideUp(400);
        })

        $(".open-nav").click(function() {
            $(".small-nav-elements").slideDown(400);


        })
    }

});