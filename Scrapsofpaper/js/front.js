$(document).ready(function() {

    $("#open-nav").click(function() {

        $(".navbar-container-mobile ul").fadeIn(400);
        $(".navbar-container-mobile ul").css({ display: "flex" });
    })

    $("#close-nav").click(function() {
        $(".navbar-container-mobile ul").fadeOut(400);
    })

    $(".navbar-container-mobile li").click(function() {
        $(".navbar-container-mobile ul").fadeOut(400);
    })
    $(window).scroll(function() {
        var wH = $(window).height(),
            wS = $(this).scrollTop();

        if (wS > 30) {
            $(".navbar").addClass("active");
        } else if (wS < 30) {
            $(".navbar").removeClass("active");
        }
    })


    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbar-elements li");
    window.onscroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current)) {
                li.classList.add("active");
            }
        });
    };




    // Send Home Email

    if (document.querySelector(".home-contact-form")) {

        document.querySelector(".home-contact-form").addEventListener("submit", submitForm);

        function submitForm(e) {
            e.preventDefault();

            //Get input values
            let name = document.querySelector(".name").value;
            let number = document.querySelector(".number").value;
            let email = document.querySelector(".email").value;
            let message = document.querySelector(".message").value;


            document.querySelector(".home-contact-form").reset();

            sendEmail(name, number, email, message);
        }

        //Send Email INfo
        function sendEmail(name, number, email, message) {
            Email.send({
                Host: "smtp.gmail.com",
                Username: 'abdoelsawyx88@gmail.com',
                Password: "dympjvjjwhukynla",
                To: 'sales@storyofpaper.com',
                From: 'ScrapsPaperWebsite@gmail.com',
                Subject: 'User Message',
                Body: `Name : ${name} <br/> Email: ${email} <br/> Phone Number : ${number} <br/> Message : ${message}`
            }).then((message) => alert("mail Sent Succefully"));
        };

    }





});