$(document).ready(function() {
    var form1 = document.getElementById("form1"),
        form2 = document.getElementById("form2"),
        form3 = document.getElementById("form3"),
        next1 = document.getElementById("next1"),
        next2 = document.getElementById("next2"),
        back1 = document.getElementById("back1"),
        back2 = document.getElementById("back2"),
        Email = document.getElementById("Email"),
        password = document.getElementById("password"),
        confirmPassword = document.getElementById("confirm-password"),
        progress = document.getElementById("progress");


    next1.onclick = function() {
        form1.style.left = "-800px";
        form2.style.left = "40px";
        progress.style.width = "240px";

    }

    back1.onclick = function() {
        form1.style.left = "40px";
        form2.style.left = "800px";
        progress.style.width = "120px";
    }

    next2.onclick = function() {
        form2.style.left = "-800px";
        form3.style.left = "40px";
        progress.style.width = "360px";
    }

    back2.onclick = function() {
        form2.style.left = "40px";
        form3.style.left = "800px";
        progress.style.width = "240px";
    }



    Email.onkeyup = function() {
        if (Email.value.includes("@")) {
            Email.style.border = "1px solid green";
            Email.style.borderRadius = "5px";

        } else {
            Email.style.border = "1px solid red";
            Email.style.borderRadius = "5px";
        }
    };


    password.onkeyup = function() {
        if (password.value < 5) {
            password.style.border = "1px solid green";
            password.style.borderRadius = "5px";
        } else {
            password.style.border = "1px solid red";
            password.style.borderRadius = "5px";
        }

    }

    confirmPassword.onkeyup = function() {
        if (password.value != confirmPassword.value) {
            password.style.border = "1px solid red";
            password.style.borderRadius = "5px";

            confirmPassword.style.border = "1px solid red";
            confirmPassword.style.borderRadius = "5px";
        } else if (password.value == confirmPassword.value && password.value < 5 || confirmPassword.value < 5) {
            password.style.border = "1px solid red";
            password.style.borderRadius = "5px";

            confirmPassword.style.border = "1px solid red";
            confirmPassword.style.borderRadius = "5px";


        } else {
            password.style.border = "1px solid green";
            password.style.borderRadius = "5px";

            confirmPassword.style.border = "1px solid green";
            confirmPassword.style.borderRadius = "5px";
        }
    };


    var EduElement = '<div class="eduback">\
    <input type="text" placeholder="Degree" required>\
    <input type="text" placeholder="University" required>\
    <input type="date" placeholder="Gradutaion Year" required>\
    </div>';


    var eduelementfather = document.getElementById("eduback");

    $("#addedu").click(function() {
        eduelementfather.appendChild(EduElement);
    });





});