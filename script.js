(function($){
   $(function(){

  /* Scroll buttons to sections */
       $(".jq--scroll-button-first").click(function(){
          $("html, body").animate({scrollTop: $("#scroll-nase-slipky").offset().top}, 1000);
       });
       
       $(".jq--scroll-button-second").click(function(){
          $("html, body").animate({scrollTop: $("#scroll-nase-vajca").offset().top}, 1500);
       });


       /* mobile navigation*/

       $(".jq--nav-icon").click(function(){

           $(".nav-bg").slideToggle();
            $ (".mobile-nav-back").fadeToggle();
             $("nav ul").fadeToggle();

       }); 

   /*change hamburger to cross a naopak*/
  $(".jq--image-hamburger").click(function(){


if ($(".jq--image-hamburger").attr("src") == "images/hamburgerMenu.png"  )
   {
      $($(".jq--image-hamburger").attr("src","images/crossMenu.png"));
   }
else
   {
      $($(".jq--image-hamburger").attr("src","images/hamburgerMenu.png"));
   }
    
    }); 
   
   }); 


   $(function(){
      $("#logo").hide().fadeIn(3000);
   });
})(jQuery);





