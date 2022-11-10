$(document).ready(function() {

    
    $(".close-popup").click(function(){
        $(".pop-up").fadeOut(400);

    })

    $(".pop-up .overlay").click(function(){
        $(".pop-up").fadeOut(400);

    })



    $(".doowr16-content>div").click(function(){
        var divId = $(this).attr('id');


        $(".doowr16 .pop-up").fadeIn(400);

        let counter = 0;

        $(document).on('click', '.doowr16 .pop-up ul li', function() {
            
            if(counter == 0){

                counter = 1;
            
            
            var thisImgSrc = $(this).children("img").attr("src");
            var thisText = $(this).text();
            var img = `<img src="${thisImgSrc}">`;
            var text = `<h1>${thisText}</h1>`;

            var element = `
            <li>
                <img crossorigin="anonymous"  src="${thisImgSrc}">
                ${thisText}
            </li>
        `;

            var element2 = `
            <img src="${thisImgSrc}">
            <h1>${thisText}</h1>
            `;

            $(`#${divId}`).empty();

            $(`#${divId}`).html(img + text);

            $(this).addClass("active");

            

            $(".doowr8 .pop-up ul").append(element);

            $(`#spot_${divId}`).empty();
            console.log(`#spot_${divId}`);

            $(`#spot_${divId}`).append(element2);

            $(".pop-up").fadeOut(400);

            divId = 0;
            
        }

        

        })

        
    });








    
    $(".doowr8-content>div").click(function(){
        var divId = $(this).attr('id');


        $(".doowr8 .pop-up").fadeIn(400);

        let counter = 0;


        

        $(document).on('click', '.doowr8 .pop-up ul li', function() {

            if(counter == 0){

                counter = 1;

            var thisImgSrc = $(this).children("img").attr("src");
            var thisText = $(this).text();
            var img = `<img crossorigin="anonymous"  src="${thisImgSrc}">`;
            var text = `<h1>${thisText}</h1>`;

            var element = `
            <li>
                <img crossorigin="anonymous" src="${thisImgSrc}">
                ${thisText}
            </li>
        `;

            $(`#${divId}`).empty();

            $(`#${divId}`).html(img + text);

            $(this).addClass("active");

            $(".doowr4 .pop-up ul").append(element);

            var element2 = `
            <img src="${thisImgSrc}">
            <h1>${thisText}</h1>
            `;
            $(`#spot_${divId}`).empty();
            console.log(`#spot_${divId}`);

            $(`#spot_${divId}`).append(element2);

            $(".pop-up").fadeOut(400);

            divId = 0;
        }
        });

    

        
    });





    $(".doowr4-content>div").click(function(){
        var divId = $(this).attr('id');


        $(".doowr4 .pop-up").fadeIn(400);

        let counter = 0;


        

        $(document).on('click', '.doowr4 .pop-up ul li', function() {

            if(counter == 0){

                counter = 1;

            var thisImgSrc = $(this).children("img").attr("src");
            var thisText = $(this).text();
            var img = `<img crossorigin="anonymous" src="${thisImgSrc}">`;
            var text = `<h1>${thisText}</h1>`;

            var element = `
            <li>
                <img crossorigin="anonymous" src="${thisImgSrc}">
                ${thisText}
            </li>
        `;

            $(`#${divId}`).empty();

            $(`#${divId}`).html(img + text);

            $(this).addClass("active");

            $(".doowr2 .pop-up ul").append(element);

            var element2 = `
            <img src="${thisImgSrc}">
            <h1>${thisText}</h1>
            `;
            $(`#spot_${divId}`).empty();
            console.log(`#spot_${divId}`);

            $(`#spot_${divId}`).append(element2);

            $(".pop-up").fadeOut(400);

            divId = 0;
        }
        });

    

        
    });







    $(".doowr2-content>div").click(function(){
        var divId = $(this).attr('id');


        $(".doowr2 .pop-up").fadeIn(400);

        let counter = 0;






        $(document).on('click', '.doowr2 .pop-up ul li', function() {

            
            if(counter == 0){

                counter = 1;


            var thisImgSrc = $(this).children("img").attr("src");
            var thisText = $(this).text();
            var img = `<img crossorigin="anonymous" src="${thisImgSrc}">`;
            var text = `<h1>${thisText}</h1>`;

            $(`#${divId}`).empty();

            $(`#${divId}`).html(img + text);

            $(this).addClass("active");

            var element2 = `
            <img src="${thisImgSrc}">
            <h1>${thisText}</h1>
            `;
            $(`#spot_${divId}`).empty();
            console.log(`#spot_${divId}`);

            $(`#spot_${divId}`).append(element2);

            $(".pop-up").fadeOut(400);

            divId = 0;

            }
        });

    

        
    });

    
    // Define the function 
    // to screenshot the div
    


});