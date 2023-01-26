$(document).ready(function() {


    const target = document.getElementById("stats");

    const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        StatIncNum();
    }
    });

    // Start observing the element
    observer.observe(target);

    function StatIncNum() {
        let currentNum = 0;
        let currentNumTemp =  parseInt($("#stat-1 h1").text());
        console.log(currentNumTemp);
        const container = document.getElementById("stat-1").querySelector("h1");
        function incrementNumber(){
            if(currentNum < currentNumTemp){
                currentNum++;
                container.innerHTML = currentNum;
            }
        
        }
        
    
        setInterval(incrementNumber, 10);
    
    
    
        let currentNum2 = 0;
        let currentNumTemp2 =  parseInt($("#stat-2 h1").text());
        const container2 = document.getElementById("stat-2").querySelector("h1");
        function incrementNumber2(){
            if(currentNum2 < currentNumTemp2){
                currentNum2++;
                container2.innerHTML = currentNum2;
            }
        }
        
    
        setInterval(incrementNumber2, 10);
    }





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