$(document).ready(function() {

    $(".side-nav .close-side-nav").click(function(){
        $(".side-nav").css({right:"-100%"});
    })

    $(".open-side-nav").click(function(){
        $(".side-nav").css({right:"0"});
    })




    $(".item .desc-rev .links h1").click(function(){
        $(".item .desc-rev .links h1").removeClass("active");
        $(".item .desc-rev .links-cont>div").slideUp(400);
        $(this).addClass("active");

        if($(this).hasClass("desc")){
            $(".item .desc-rev .links-cont .description").slideDown(400);
        }

        if($(this).hasClass("rev")){
            $(".item .desc-rev .links-cont .reviews").slideDown(400);
        }
    })





});