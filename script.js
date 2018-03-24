
/*
jQuery(document).ready(function ($) {
    $(window).load(function () {
        setTimeout(function(){
            $('#preloader').fadeOut('slow', function () {
            });
        },3000); // set the time here
    });  
});
*/
 $(window).on('load', function(){
                 $('#loaderSvgWrapper').fadeOut(500);
                 $('#preloader').delay(350).fadeOut('slow',3000);
                $('body').delay(350).css({'overflow':'visible'});
          });