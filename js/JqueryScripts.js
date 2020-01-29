$(document).ready(function (){

    $(window).scroll(function (){
        console.log($(window).scrollTop())

        if ($(window).scrollTop() > 280) {
            $('#NavBar').addClass('navbar-fixed');
          }

        if ($(window).scrollTop() < 281) {
            $('#NavBar').removeClass('navbar-fixed');
          }


    });

});