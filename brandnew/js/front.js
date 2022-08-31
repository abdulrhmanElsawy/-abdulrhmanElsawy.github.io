$(".dark").click(function(){
    $(".dark").toggleClass("active");
    $("body").toggleClass("dark-mode");
});


var cursor = document.querySelector('.cursor'),


    SecionOneLeft = document.querySelectorAll('.first-section .section-content-left'),
    SecionOneRight = document.querySelectorAll('.first-section .section-content-right'),


    SecionTwoLeft = document.querySelectorAll('.second-section .section-content-left'),
    SecionTwoRight = document.querySelectorAll('.second-section .section-content-right'),



    SecionThreeLeft = document.querySelectorAll('.third-section .section-content-left'),


    SecionFourLeft = document.querySelectorAll('.fourth-section .section-content-left'),
    SecionFourRight = document.querySelectorAll('.fourth-section .section-content-right'),


    SecionFiveLeft = document.querySelectorAll('.fifth-section .section-content-left'),


    SecionSixLeft = document.querySelectorAll('.sixth-section .section-content-left'),
    SecionSixRightUp = document.querySelectorAll('.sixth-section .section-content-right .section-right-up'),
    SecionSixRightDown = document.querySelectorAll('.sixth-section .section-content-right .section-right-down'),

    SecionSevenLeft = document.querySelectorAll('.seventh-section .section-content-left'),



    SecionEightLeft = document.querySelectorAll('.eightth-section .section-content-left'),
    SecionEightRight = document.querySelectorAll('.eightth-section .section-content-right'),


    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

SecionOneLeft.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionOneLeft');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionOneLeft');
        
    });
});


SecionOneRight.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionOneRight');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionOneRight');
        
    });
});






SecionTwoLeft.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionTwoLeft');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionTwoLeft');
        
    });
});


SecionTwoRight.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionTwoRight');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionTwoRight');
        
    });
});



SecionThreeLeft.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionThreeLeft');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionThreeLeft');
        
    });
});



SecionFourLeft.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionFourLeft');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionFourLeft');
        
    });
});


SecionFourRight.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionFourRight');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionFourRight');
        
    });
});


SecionFiveLeft.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionFiveLeft');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionFiveLeft');
        
    });
});




SecionSixLeft.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionSixLeft');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionSixLeft');
        
    });
});





SecionSixRightUp.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionSixRightUp');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionSixRightUp');
        
    });
});




SecionSixRightDown.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionSixRightDown');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionSixRightDown');
        
    });
});




SecionSevenLeft.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionSevenLeft');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionSevenLeft');
        
    });
});


SecionEightLeft.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionEightLeft');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionEightLeft');
        
    });
});


SecionEightRight.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('SecionEightRight');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('SecionEightRight');
        
    });
});
$(".go-up").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});