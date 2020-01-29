$(document).ready(function (){

    $(window).scroll(function (){
        console.log($(window).scrollTop());
        
        if ($(window).scrollTop() > 73) {
            $('#NavBar').addClass('navbar-fixed');
          }
        if ($(window).scrollTop() < 74) {
            $('#NavBar').removeClass('navbar-fixed');
          }

    });


});