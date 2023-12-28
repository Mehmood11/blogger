$(document).ready(function () {

    // Toggle Menu / Nav bar script 
    $('nav .menu-btn').click(function () {
        $("nav ul").toggleClass("active");
        $("nav .menu-btn i").toggleClass("active");
    });

    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('nav').addClass("sticky");
        }
        else {
            $('nav').removeClass("sticky");
        }
    });

 
    $('.carousel').owlCarousel({
        margin: 40,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
               items: 2,
               nav: false
           },
           1000:{
               items: 3,
               nav: false
           }
        }
   });



//    $("#sidebar").stickySidebar({
//        sidebarTopMargin: 20,
//        footerThreshold:100
//    });
});