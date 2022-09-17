<?php include("simple_html_dom.php"); 

$html = file_get_html('https://www.yalla-shoot.com/match/index.php');




?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <title>Yalla Kora </title>

    <!-- Styles -->

    <link rel="styleSheet" href="css/normalize.css">
    <link rel="styleSheet" href="css/all.min.css">
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link rel="icon" href="images/logo.png" src="images/logo.png">
    <link rel="styleSheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.8/swiper-bundle.min.css" />


    <link rel="styleSheet" href="css/front.css">



    <!-- FontAwesome Cdn -->
    <link rel="stylesheet" href="css/aos.css" />
    <link rel="stylesheet" type="text/css" href="css/animate.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />


</head>

<body>


    <!-- Start navbar Section -->
<nav>
    <div class="container">
        <div class="row">
            <div class="nav-content">
                <div class="socialmedia">
                    <ul>
                        <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    </ul>
                </div>


                <div class="logo">
                    <img src="images/titi-taka.png">
                </div>
            </div>
        </div>
    </div>
</nav>








    <!-- End navbar Section -->



    <!-- Start Matches Section -->

    <section class="Matches">
        <div class="container">
            <div class="row">
                <div class="header">
                    <h1>أهم مباريات اليوم</h1>
                </div>


                <div class="matches-content">
            <?php
                foreach($html->find('.matsh_live') as $element){
                    echo '

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="match">
                                    <div class="match-info">
                                        <ul>
                                            <li> '.$element->first_child()->next_sibling()->first_child()->next_sibling()->next_sibling()->first_child()->first_child()->first_child()->first_child()->next_sibling()->plaintext .'<i>📺</i></li>
                                            <li>  '.$element->first_child()->next_sibling()->first_child()->next_sibling()->next_sibling()->first_child()->first_child()->next_sibling()->first_child()->first_child()->next_sibling()->plaintext .' <i>🎤</i></li>

                                            <li>  '.$element->first_child()->next_sibling()->first_child()->next_sibling()->next_sibling()->first_child()->first_child()->next_sibling()->next_sibling()->first_child()->next_sibling()->plaintext .'  <i>🏆</i></li>

                                        </ul>
                                    </div>
                                    <div class="match-details">
                                        <div class="left">
                                            <img src="https://www.yalla-shoot.com/'.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling()->next_sibling()->first_child()->src.'">
                                            <span>'.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling().'</span>
                                        </div>

                                        <div class="middle">
                                            <div>
                                                <span>'.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling()->next_sibling()->next_sibling()->first_child().'</span>
                                                
                                            </div>

                                            <span> '.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling()->next_sibling()->next_sibling()->next_sibling()->next_sibling()->next_sibling()->first_child().' </span>
                                        </div>

                                        <div class="right">
                                            <img src="https://www.yalla-shoot.com/'.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling()->next_sibling()->next_sibling()->next_sibling()->first_child()->src.'">
                                            <span>'.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling()->next_sibling()->next_sibling()->next_sibling()->next_sibling().'</span>
                                        </div>
                                    </div>

                                    
                                </div>

                                <div class="drop-down-div">
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </div>
                            </div>


<pre>


 &lt;div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"&gt; 
     &lt;div class="match"&gt; 
         &lt;div class="match-info"&gt; 
         &lt;ul&gt; 
                 &lt;li&gt;  '.$element->first_child()->next_sibling()->first_child()->next_sibling()->next_sibling()->first_child()->first_child()->first_child()->first_child()->next_sibling()->plaintext .'&lt; i&gt; 📺&lt; /i&gt; &lt; /li&gt; 
                 &lt;li&gt;   '.$element->first_child()->next_sibling()->first_child()->next_sibling()->next_sibling()->first_child()->first_child()->next_sibling()->first_child()->first_child()->next_sibling()->plaintext .' &lt; i&gt; 🎤&lt; /i&gt; &lt; /li&gt; 

                 &lt;li&gt;   '.$element->first_child()->next_sibling()->first_child()->next_sibling()->next_sibling()->first_child()->first_child()->next_sibling()->next_sibling()->first_child()->next_sibling()->plaintext .'  &lt; i&gt; 🏆&lt; /i&gt; &lt; /li&gt; 

             &lt;/ul&gt; 
         &lt;/div&gt; 
         &lt;div class="match-details"&gt; 
             &lt;div class="left"&gt; 
                 &lt;img src="https://www.yalla-shoot.com/'.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling()->next_sibling()->first_child()->src.'"&gt; 
                 &lt;span&gt; '.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling().'&lt; /span>
             &lt;/div&gt; 

             &lt;div class="middle"&gt; 
                 &lt;div&gt; 
                     &lt;span&gt; '.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling()->next_sibling()->next_sibling()->first_child().'&lt; /span&gt; 
                    
                 &lt;/div&gt; 

                 &lt;span&gt;  '.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling()->next_sibling()->next_sibling()->next_sibling()->next_sibling()->next_sibling()->first_child().' &lt; /span&gt; 
             &lt;/div&gt; 

             &lt;div class="right"&gt; 
                 &lt;img src="https://www.yalla-shoot.com/'.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling()->next_sibling()->next_sibling()->next_sibling()->first_child()->src.'"&gt; 
                 &lt;span&gt; '.$element->first_child()->next_sibling()->first_child()->first_child()->first_child()->next_sibling()->next_sibling()->next_sibling()->next_sibling()->next_sibling().'&lt; /span&gt; 
             &lt;/div&gt; 
         &lt;/div&gt; 
     &lt;/div&gt; 
 &lt;/div&gt; 

</pre>


                    
                    ';
                    
                }
            ?>
                
                
    



                </div>
            </div>
        </div>
    </section>



    <!-- End Matches Section -->




    <!-- Start Footer Section -->

    <footer>
        <div class="container">
            <div class="row">
                <h1>تصميم وتطوير فريق تيكي تاكا</h1>

                <div class="footer-content">
                    <ul>
                        <li><a href="#">سياسة الخصوصية</a></li>
                        <li><a href="#">اتصل بنا</a></li>
                        <li><a href="#">من نحن</a></li>
                    </ul>

                    <h2>
                        جميع الحقوق محفوظة 2022 © قالب تيكي تاكا</h2>
                </div>
            </div>
        </div>
    </footer>





    <!-- End Footer Section -->













    


    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
        AOS.init({
            offset: 100,
            delay: 100,
            duration: 1000,
        });
    </script>

    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/smtp.js"></script>

    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.8/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12 "></script>
    <script src="js/front.js"></script>
</body>



</html>

</html>