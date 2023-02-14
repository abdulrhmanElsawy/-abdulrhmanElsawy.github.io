$(document).ready(function() {

    $(".side-nav.active .toggle-nav").click(function(){
        $("nav").toggleClass("active");
        $(".side-nav").toggleClass("active");
        $(".side-nav .toggle-nav span").toggleClass("active");
        $(".nav-sub-eles").toggleClass("active");
        $(".page-table").toggleClass("active");

        if ($(window).width() < 1000) {
            $(".side-nav.active").css({width:230});
            $(".nav-sub-eles.active").css({width:150,left:230});

            if( $(".side-nav").hasClass("active")){}else{
            $(".side-nav").css({width:37});
            $(".nav-sub-eles").css({width:0,left:230});
            }
        }

        
    });

    if ($(window).width() >= 1000) {
        $("nav").addClass("active");
        $(".side-nav").addClass("active");
        $(".side-nav .toggle-nav span").addClass("active");
        $(".nav-sub-eles").addClass("active");
        $(".page-table").addClass("active");
    }else{
        $("nav").removeClass("active");
        $(".side-nav").removeClass("active");
        $(".side-nav .toggle-nav span").removeClass("active");
        $(".nav-sub-eles").removeClass("active");
        $(".page-table").removeClass("active");
    }

    $(window).resize(function() {
        if ($(window).width() < 1000) {
            $(".side-nav").css({width:"37px"});
            $(".nav-sub-eles").css({width:"0",left:"37px"});
            $("nav").removeClass("active");
            $(".side-nav").removeClass("active");
            $(".side-nav .toggle-nav span").removeClass("active");
            $(".nav-sub-eles").removeClass("active");
            $(".page-table").removeClass("active");
        } else {
            $(".side-nav").css({width:"18%"});
            $(".nav-sub-eles").css({width:"8%",left:"18%"});
            $("nav").addClass("active");
            $(".side-nav").addClass("active");
            $(".side-nav .toggle-nav span").addClass("active");
            $(".nav-sub-eles").addClass("active");
            $(".page-table").addClass("active");
        }
    });


    $(document).ready(function() {
        $('#open-pop').click(function() {
            $('#my-popup').fadeIn();
        });
        $('#close-popup').click(function() {
            $('#my-popup').fadeOut();
        });
        });
});