$(document).ready(function() {

    $(".about-class .about-content>div .header").click(function(){
        $(this).parent().children(".body").slideToggle(400);
        $(this).children("i").toggleClass("active");
    })


    $(".questions-section .questions .question .header i").click(function(){
        $(this).parent().parent().children(".description").slideToggle(400);
    })


    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll > 30){
            $("nav").addClass("active");
        }else{
            $("nav").removeClass("active");
        }
    });


    $(".open-nav").click(function() {
        $(".mobile-nav").slideDown(400);
    })

    $(".close-nav").click(function() {
        $(".mobile-nav").slideUp(400);
    })

    $(".mobile-nav ul li").click(function() {
        $(".mobile-nav").slideUp(400);
    })



});