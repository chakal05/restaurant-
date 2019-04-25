$(document).ready(function(){  
   // Fade out notification
    $('.errorMessage').fadeOut(11000, "swing");

      $("#datepicker").datepicker({
        beforeShow: function(input, obj) {
            $(input).after($(input).datepicker('widget'));
        }
    });
    
    // Smooth scroll for top button
  $(".pub a").click(function(e){
      e.preventDefault();
          var desc =
           $($(this).attr("href")).offset().top;

          $("body, html").animate({
              scrollTop: desc
     }, 1500);
    
  });

    
    // Regex for email

       function isEmail(email){
        var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
        }
    
        function phoneNumber(phone){
        var regex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return regex.test(phone);
        
        }

         // Make sure input is not empty before submitting
       $("form").submit(function (e){
   
        let errorMessage = "";
        let missingFields ="";
       
   
       if($("#email").val() === ""){
            missingFields += "<br>Your email is missing";
        }else if (isEmail($("#email").val()) === false) {
            errorMessage+= "You're email is not valid<br>";
        }
       
        if($("#phone").val() === ""){
           missingFields += "<br>Your phone number is missing";
       }else if( phoneNumber($("#phone").val())=== false){
           errorMessage += "<p>Your number is not valid</p>";
       }
   
       if($("#datepicker").val()=== ""){
           missingFields += "<br>The date is missing";
       }
        
       if(missingFields !== ""){
            errorMessage+= "<p>The following fields are missing</p>" + missingFields;
       }
   
       if(errorMessage !== ""){
            e.preventDefault();
           $("#errorMessage").html('<div class="alert alert-danger" role="alert"> There are problems with your request' + errorMessage + '</div>');
       }
       });



    });


    
    // Positionning top text
    
   function up(){
    $(".navbar-toggler").click(function(){
        $(".pub").css({
            "position":"relative",
            "top":"0"
        }, down());

        $(".pub .btn").css(
           "margin-top","15%"
           , down());
    });
   }

   function down(){
    $(".navbar-toggler").click(function(){
        $(".pub").css({
            "position":"relative",
            "top":"11%"
        }, up());

        $(".pub .btn").css(
           "margin-top","43%"
           , up());
    });
   }