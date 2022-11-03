$(document).ready(function() {

    
    $('.landing-slider .slider').slick({
        dots: false,
        arrows:false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay:true,
        autoplayspeed:3000,
        cssEase: 'linear'
    });


    $(".category-products .sub-category .sub-head h3").click(function(){
        $(this).parent().next().slideToggle(400);
        $(this).parent().next().css({display:"flex"});
    })

});