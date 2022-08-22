$(document).ready(function() {

    $(".go-up").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
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