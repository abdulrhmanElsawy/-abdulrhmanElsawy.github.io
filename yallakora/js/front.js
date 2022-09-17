$(document).ready(function() {

    $(".drop-down-div").click(function(){
        $(this).parent().next().slideToggle(400);
        $(this).toggleClass("active")
    });


});