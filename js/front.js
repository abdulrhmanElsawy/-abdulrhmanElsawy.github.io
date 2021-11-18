var $window = $(window);
var $myVar = $('#myDiv');
var $myDist = 0;
var $aboutdiv = document.getElementById("about");
var $whyEgyptus = document.getElementById("why-egyptus");
var $firstLeftPara = document.getElementById("first-left-para");
var $firstrightimg = document.getElementById("first-right-img");
var $secondLeftimg = document.getElementById("second-left-img");
var $secondRightPara = document.getElementById("first-right-para");
var $thirdLeftPara = document.getElementById("third-left-para");
var $thirdRightimg = document.getElementById("third-right-img");

$window.on('scroll', function() {

    $myDist = $window.scrollTop();
    if ($myDist > ($aboutdiv.offsetTop - 200)) {
        $("#about-para").css("opacity", "1");
    }

    if ($myDist > ($firstLeftPara.offsetTop + 900)) {
        $("#first-left-para").css("left", "0");
        $("#first-right-img").css("left", "0");

    }

    if ($myDist > ($secondLeftimg.offsetTop + 900)) {
        $("#second-right-para").css("left", "0");
        $("#second-left-img").css("left", "0");

    }

    if ($myDist > ($thirdLeftPara.offsetTop + 900)) {
        $("#third-left-para").css("left", "0");
        $("#third-right-img").css("left", "0");

    }


});