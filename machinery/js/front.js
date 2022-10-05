$(document).ready(function() {


    
    /*--
            Sliders
        -----------------------------------*/
    // Hero Slider
    $('.hero-slider').slick({
        infinite: true,
        fade: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 10000,
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



    $('.categories-slider .slider').slick({
        dots: false,
        infinite: true,
        arrows:false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 3,
        centerMode: true,
        variableWidth: true
    });



    $('.products .slider').slick({
        dots: false,
        infinite: true,
        arrows:true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 3,
        centerMode: true,
        variableWidth: true
    });


    $(".products .slider .slick-prev").text("");
    $(".products .slider .slick-prev").html('<i class="fa-solid fa-chevron-left"></i>');

    $(".products .slider .slick-next").text("");
    $(".products .slider .slick-next").html('<i class="fa-solid fa-chevron-right"></i>');
    
    

    $(".drop-down-div").click(function(){
        $(this).parent().children("p").slideToggle(400);
        $(this).toggleClass("active")
    });


    $('.item-galary .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.item-galary .slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        arrows: false,
        focusOnSelect: true
    });






    $(".item-details .details-nav ul li:nth-child(1)").click(function(){
        $(".item-details .details-nav ul li").removeClass("active");
        $(".item-details .description").fadeOut(400);
        $(this).addClass("active");
        $(".item-details .specifications").delay(500).fadeIn(400);
    })


    $(".item-details .details-nav ul li:nth-child(2)").click(function(){
        $(".item-details .details-nav ul li").removeClass("active");
        $(".item-details .specifications").fadeOut(400);
        $(this).addClass("active");
        $(".item-details .description").delay(500).fadeIn(400);
    })

    $(".open-mobile-nav").click(function(){
        $(".mobile-nav").addClass("active")
    })
    $(".close-mobile-nav").click(function(){
        $(".mobile-nav").removeClass("active")
    })

    $(".mobile-nav .overlay").click(function(){
        $(".mobile-nav").removeClass("active")
    })


    $(".mobile-nav>ul>li").click(function(){

        if($(".mobile-sub-nav").hasClass("active")){
        $(this).children("ul").removeClass("active");
        }else{
            $(this).children("ul").addClass("active");
        }
    })



    
});