<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Restaurant</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet">
    <link rel="stylesheet" href="jquery-ui-1.12.1/jquery-ui.css">
    <link rel="stylesheet" type="text/css" media="screen" href="index.css" >
   
</head>
<body>

    <div class="box">
    <div class="top" id="homeSection">
    <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="#">Sabira</a>
    <button class="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li class="nav-item active">
    <a class="nav-link"  id="home" href="#homeSection">Home  <span class="sr-only">(current)</span></a>
    </li>

    <li class="nav-item">
    <a class="nav-link" id="menu" href="#menuSection">Menu</a>
    </li>

    <li class="nav-item">
    <a class="nav-link"  id="reservation" href="#reservationSection">Reservation </a>
    </li>

    <li class="nav-item">
    <a class="nav-link" id="about" href="#aboutSection">About</a>
    </li>

    <li class="nav-item">
    <a class="nav-link" id="contact" href="#contactSection">Contact </a>
    </li>
    </ul>
    </div>
    </nav>

    <div class="pub">
    <h1>Welcome to<br> <span>Sabira Restaurant</span></h1>
    <div class="bouton"><a href="#aboutSection">Learn More</a></div>
    </div>
    </div>

    <div id="aboutSection" class="about">
    <h2>Our story </h2>

    <p class="first">Ali Hassan and Noor Ahmed teamed up in 2009 before going on to establish 
    Sabira Restaurant in the city of Muqdisho. Over time, Sabira Restaurant 
    became the nation’s premier restaurant for seafood and meat restaurants. 
    The combination of an open imagination and a respect for tradition
    is what makes Sabira Restaurant the classic and successful business
    that it is today.</p>
    <p>Sabira Restaurant’s menu is printed twice daily,
    featuring the signature “Fresh List” highlighting an impressive number of fresh seafood varieties,
    in addition to aged steaks, poultry, entrée salads and pasta. Sabira's commitment 
    to local freshness is apparent in the seasonally inspired dishes and regionally 
    inspired preparations offered. </p>


    </div>
    
    <div id="menuSection" class="menu">

    <h2>Our menus </h2>

    <div class="bd-example">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="appetisers.jpg" class="d-block w-100" alt="...">
    <div class="carousel-caption  ">
    <h3>Appetisers</h3>

    <ul>
    <li>Seafood Wontons... $15,95</li>
    <li>Calamari... $10.95 </li>
    <li>Oyster on Half Shell... $16.95</li>
    <li>Charcuterie... $16.45</li>

    </ul>

    </div>
    </div>
    <div class="carousel-item">
    <img src="meat.jpg" class="d-block w-100" alt="...">
    <div class="carousel-caption ">
    <h3>Meat dishes</h3>
    <ul>
    <li>NY Strip Steak (70g)... $26.95</li>
    <li>Hanger Steak... $18.95</li>
    <li>Ribeye Steak ... $26.95</li>
    <li>Fillet (700g)... $31.95</li>
    </ul>

    </div>
    </div>

    <div class="carousel-item">
    <img src="salad.jpg" class="d-block w-100" alt="...">
    <div class="carousel-caption ">
    <h3>Salad dishes</h3>
    <ul>
    <li>House... $9</li>
    <li>Caesar... $8.95</li>
    <li>Greek ... $7.95</li>
    <li>Chicken Wedge... $12.95</li>
    </ul>
    </div>
    </div>

    <div class="carousel-item">
    <img src="seafood.jpg" class="d-block w-100" alt="...">
    <div class="carousel-caption  ">
    <h3>Seafood</h3>
    <ul>
    <li>MusselsLight ... $17.95</li>
    <li>Fish n Chips ... $16.95</li>
    <li>Grilled  ... $24.95</li>
    <li>Grilled Shrimp  ... $21.95</li>
    </ul>
    </div>
    </div>

    <div class="carousel-item">
    <img src="burger.jpg" class="d-block w-100" alt="...">
    <div class="carousel-caption">
    <h3>Burgers</h3>
    <ul>
    <li>Swedesburger ... $14.95</li>
    <li>Cheeseburger ... $9.95</li>
    <li>Salmon Burger ... $10.95</li>
    <li>Turkey Burger ... $9.95</li>
    </ul>
    </div>
    </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>
    </div>
    </div>
    </div>
    </div>
    </div>

    <div class="outline"> <p>We take pride in our management and friendly staff. 
    Our homemade delicious food includes our specialty of 17 different dishes and pasta of many nations.</p></div>
    <div id="reservationSection" class="reservation">

    <div class="square">
    <h2>BOOK A TABLE</h2>
    <a href="book.php">BOOK NOW </a>
    </div>

    </div>

    <div id="contactSection" class="contact">
    <h2>Sabira</h2>

    <ul>

    <li>Saturday - Thursday: 11.30-21.00</li>
    <li>Friday: Closed</li>
    <li>Telephone: 252 76 15 55 60</li>
    <li> In front of the Military Academy, Mogadisho</li><br>
    <li><i class="fas fa-envelope"></i></li>
    <li><i class="fab fa-facebook-square"></i></li>
    <li><i class="fab fa-instagram"></i></li>

    </ul>
    </div>

    </div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<script src="jquery-ui-1.12.1/jquery.js"></script>
<script src="jquery-ui-1.12.1/jquery-ui.js"></script>
<script type="text/javascript" src="index.js"></script>
</script>
</body>
</html>