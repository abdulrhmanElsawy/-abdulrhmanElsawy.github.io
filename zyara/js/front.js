$(document).ready(function() {

    let imagesArray = $(".solutions .images img").toArray();

    $(".solutions-content .solution").hover(function(){
        let elementid = $(this).attr('id');
        $(".solutions .images img").css({opacity:"0"})
        $(imagesArray[elementid-1]).css({opacity:"1"})
        $(".solutions-content .solution p").css({opacity:"0"})
        $(this).children("p").css({opacity:"1"})
    })




    

    $('.partners-slider .slider').slick({
        dots: false,
        arrows:false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        autoplay:true,
        autoplayspeed:2000,
        variableWidth: true
    });


    $(".opennav").click(function(){
        $(".side-nav").css({left:"0%"})
    })

    $(".closenav").click(function(){
        $(".side-nav").css({left:"-100%"})
    })


});