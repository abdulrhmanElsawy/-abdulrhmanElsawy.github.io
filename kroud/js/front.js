$(document).ready(function() {
    $(".open-nav").click(function() {
        $(".mobile-nav").slideDown(400);
    })

    $(".close-nav").click(function() {
        $(".mobile-nav").slideUp(400);
    })

    $(".mobile-nav ul li").click(function() {
        $(".mobile-nav").slideUp(400);
    })
    

    var typed = new Typed(".auto-type", {
        strings: ["نحن نقدم خدمة ممتازة لجميع أنواع القروض  ونقدم الخدمة والمشورة والتوجيه"],
        typeSpeed: 40,
        backSpeed: 40,
        loop: false
    })

});