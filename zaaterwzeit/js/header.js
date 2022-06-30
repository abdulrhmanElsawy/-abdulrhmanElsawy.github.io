let header = `<div class="upper-nav">
<div class="container">
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <img class="logo" src="images/logo.png">
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="email">
            <h1><i class="fa-solid fa-envelope"></i> Email</h1>
            <p>info@first-falcon.com</p>
        </div>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="conect">
            <h1><i class="fa-solid fa-phone"></i> Call Us</h1>
            <p>966580588231+</p>
            <p>966580588231+</p>
        </div>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div class="adress">
            <h1><i class="fa-solid fa-location-pin"></i> Location</h1>
            <p>P.O Box 87205, Riyadh 11642,</p>
            <p>Kingdom of Saudi Arabia</p>
        </div>
    </div>
</div>
</div>
<div class="lower-nav">

<ul class="nav-elements">
    <li>
        <a href="index.html">Home</a>
    </li>
    <li>
        <a href="#">About <i class="fa-solid fa-angle-down"></i></a>
        <div class="show-all-nav">
            <ul>
                <li><a href="TheWayWeWork.html">The Way We Work</a></li>
                <li><a href="WhyFirstFalcon.html">Why FirstFalcon</a></li>
                <li><a href="QualityCommitment.html">Quality Committments</a></li>
                <li><a href="KeyPartners.html">Key Partners</a></li>
            </ul>
        </div>
    </li>
    <li>
        <a href="#">Services <i class="fa-solid fa-angle-down"></i></a>
        <div class="show-all-nav">
            <ul>
                <li><a href="services.html">Services</a></li>
                <li><a href="managedservices.html">Managed Services</a></li>
                <li><a href="networkmanagment.html">Newtwork Managment</a></li>
                <li><a href="cablingservices.html">Cabling Services</a></li>
                <li><a href="supportservices.html">Support Services</a></li>
                <li><a href="cybersecurity.html">Cyber Security</a></li>

            </ul>
        </div>
    </li>
    <li>
        <a href="#">Industries <i class="fa-solid fa-angle-down"></i></a>
        <div class="show-all-nav">
            <ul>
                <li><a href="Industries.html">Industries</a></li>
                <li><a href="banking.html">Banking</a></li>
                <li><a href="healthcare.html">Health Care</a></li>
                <li><a href="finance.html">Finance</a></li>
                <li><a href="government.html">Government</a></li>
                <li><a href="communication.html">Communications</a></li>

            </ul>
        </div>
    </li>
    <li>
        <a href="#">Solutions <i class="fa-solid fa-angle-down"></i></a>
        <div class="show-all-nav">
            <ul>
                <li><a href="solutions.html">Solutions</a></li>
                <li><a href="solutionserp.html">Solutions ERP</a></li>
                <li><a href="cybersecurity.html">Cyber Security</a></li>
                <li><a href="#">Artifcial Intelligence</a></li>
                <li><a href="internetofthings.html">Internet of Things (IOT)</a></li>
                <li><a href="strategyandplaning.html">Strategy & Planning</a></li>
                <li><a href="itsupportmanagedservices.html">It Support & Managed Services</a></li>
                <li><a href="itsupportprojects.html">It Solutions & Projects</a></li>
                <li><a href="procurement.html">Procurement</a></li>
                <li><a href="#">Security Consultancy</a></li>

            </ul>
    </li>
    <li>
        <a href="careers.html">Careers</a>
    </li>
    <li>
        <a href="#">Contact</a>
    </li>
    <button id="open-small-nav"><i class="fa-solid fa-bars-staggered"></i> Menu</button>
</ul>



<div class="social-media"><a href="#"><i class="fa-brands fa-facebook-f"></i></a> <a href="#"><i class="fa-brands fa-twitter"></i></a>
    <a href="#"><i class="fa-brands fa-instagram"></i></a><a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
    <a href="#"><i class="fa-brands fa-pinterest"></i></a>
</div>
</div>`;

let ele = document.getElementById("navbar");

ele.innerHTML = header;


let smallNav = ` <i id="close-nav-small" class="fas fa-close"></i>
<ul class="nav-elements-small">
    <li>
        <a href="index.html">Home</a>
    </li>
    <li>
        <a href="#">About <i class="fa-solid fa-angle-down"></i></a>
        <div class="show-all-nav-small">
            <ul>
                <li><a href="TheWayWeWork.html">The Way We Work</a></li>
                <li><a href="WhyFirstFalcon.html">Why FirstFalcon</a></li>
                <li><a href="QualityCommitment.html">Quality Committments</a></li>
                <li><a href="KeyPartners.html">Key Partners</a></li>
            </ul>
        </div>
    </li>
    <li>
        <a href="#">Services <i class="fa-solid fa-angle-down"></i></a>
        <div class="show-all-nav-small">
            <ul>
                <li><a href="services.html">Services</a></li>
                <li><a href="managedservices.html">Managed Services</a></li>
                <li><a href="networkmanagment.html">Newtwork Managment</a></li>
                <li><a href="cablingservices.html">Cabling Services</a></li>
                <li><a href="supportservices.html">Support Services</a></li>
                <li><a href="cybersecurity.html">Cyber Security</a></li>

            </ul>
        </div>
    </li>
    <li>
        <a href="#">Industries <i class="fa-solid fa-angle-down"></i></a>
        <div class="show-all-nav-small">
            <ul>
                <li><a href="Industries.html">Industries</a></li>
                <li><a href="banking.html">Banking</a></li>
                <li><a href="healthcare.html">Health Care</a></li>
                <li><a href="finance.html">Finance</a></li>
                <li><a href="government.html">Government</a></li>
                <li><a href="communication.html">Communications</a></li>

            </ul>
        </div>
    </li>
    <li>
        <a href="#">Solutions <i class="fa-solid fa-angle-down"></i></a>
        <div class="show-all-nav-small">
            <ul>
                <li><a href="solutions.html">Solutions</a></li>
                <li><a href="cybersecurity.html">Cyber Security</a></li>
                <li><a href="#">Artifcial Intelligence</a></li>
                <li><a href="internetofthings.html">Internet of Things (IOT)</a></li>
                <li><a href="strategyandplaning.html">Strategy & Planning</a></li>
                <li><a href="itsupportmanagedservices.html">It Support & Managed Services</a></li>
                <li><a href="itsupportprojects.html">It Solutions & Projects</a></li>
                <li><a href="procurement.html">Procurement</a></li>
                <li><a href="#">Security Consultancy</a></li>

            </ul>
    </li>
    <li>
        <a href="#">Careers</a>
    </li>
    <li>
        <a href="#">Contact</a>
    </li>
</ul>`;

let ele2 = document.getElementById("small-screen-nav");

ele2.innerHTML = smallNav;