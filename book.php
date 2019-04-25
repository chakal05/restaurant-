<?php

    $link = mysqli_connect("localhost", "chakgpqj_balbala", "rZwfwt3_njm_", "chakgpqj_user");
    $mail_webmaster = 'chakir@chakirkhaire.com';

    //Top site root URL
    $url_root = 'http://www.chakirkhaire.com';
    
    
    $errorMessage = "";
    
    $success = "";
    
    // Validate and insert 

    if(isset($_POST["submit"])){
    
    if(!$_POST["email"]) {
        $errorMessage .= "The email address is missing<br>";
    }else if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)=== false) {
        $errorMessage .= "Your email is not valide <br>";
    }
    
    if(!$_POST["telephone"]) {
        $errorMessage .= "The phone number is missing<br>";
    }
    
    if(!$_POST["guest"]) {
        $errorMessage .= "The number of guests is missing<br>";
    }
    
    if(!$_POST["time"]) {
        $errorMessage .= " The time is missing<br>";
    }
    
    if(!$_POST["datepicker"]) {
        $errorMessage .= "The date is missing<br>";
    }
    if($errorMessage != "" ) {
        $errorMessage = '<div class="alert alert-danger" role="alert">' . $errorMessage . '</div>';
   
  }else{
      
    $email = mysqli_real_escape_string($link, $_POST['email']);
    $telephone = mysqli_real_escape_string($link, $_POST['telephone']);
    $guests = mysqli_real_escape_string($link, $_POST['guest']);
    $time = mysqli_real_escape_string($link, $_POST['time']);
    $datepicker = mysqli_real_escape_string($link, $_POST['datepicker']);
    
    //insert into `messages`
    
    $sql= "INSERT  INTO `reservations` VALUES ('','$email','$telephone','$guests','$time','$datepicker')";
    $q= mysqli_query($link,$sql);
    
    // Send email notification to customer

        $to      = $email;
        $subject = 'Table reservation';
        $message = 'Your reservation is confirmed';
        $headers = 'From: chakir@chakirkhaire.com' . "\r\n" .
    // 'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if($q && mail($to, $subject, $message, $headers)){

    //insert was successful
    $success = '<div class="alert alert-success errorMessage" role="alert">' ."Your reservation has been made. An email confirmation was sent. If not in the inbox, please check your spam forlder... Welcome!". '</div>';

    } else {
    
    //insert failed
    echo "Error";

    }
        
  
        
  }
 
}
?>


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
    <link rel="stylesheet" type="text/css" media="screen" href="book.css" >
   
</head>
<body>
    
    <div class="haut" id="homeSection">
    <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="#">Sabira</a>
    <button class="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>

    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li class="nav-item active">
    <a class="nav-link"  id="home" href="index.php">Home  </a>
    </li>

    </ul>

    </div>
    </nav>
    </div>

    <div id="reservationSection" class="reservation">
    <div class="frame">
    <h2>Book a table </h2> 
    <div id="errorMessage"><?php echo $errorMessage.$success; ?></div>
    <form method ="post">

    <input type="text" name="email" id="email" placeholder="Your email here"> 

    <input type="text" name="telephone" id="phone" placeholder="Your phone number "> 

    <div class="form-group">
    <label for="guest">Number of guests</label>
    <select class="form-control" id="guest" name="guest">
    <option>1</option>
    <option selected= "selected">2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    </select>
    </div>

    <div class="form-group">

    <label for="guest">What time?</label>
    <select class="form-control" id="time" name="time" >
    <option>10:00</option>
    <option>11:00</option>
    <option>12:00</option>
    <option>13:00</option>
    <option>14:00</option>
    <option>15:00</option>
    <option>16:00</option>
    <option>17:00</option>
    <option>18:00</option>
    <option>19:00</option>
    <option>20:00</option>
    <option>21:00</option>
    </select>
    </div>

    <p id="fix"><input type="text" id="datepicker" name="datepicker" placeholder="Please, pick a date" ></p> 
    <button id="boka" type="submit" name="submit">Submit</button>
    </form>
    </div>
    </div>
    <div class="map">
    <h2>Visit us</h2>
    <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26316.190629829583!2d45.30672190751577!3d2.042878587079041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d5869d89cdad90b%3A0xbc2eff23c3c6897a!2sMilitary+Academy%2C+Mogadishu%2C+Somalia!5e0!3m2!1ssv!2sse!4v1545038838912" 
    frameborder="0" style="border:0" allowfullscreen></iframe></p>
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