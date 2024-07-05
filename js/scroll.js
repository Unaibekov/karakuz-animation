$(document).ready(function () {
    // var $hor = $("#horizontal");

    // $("body").css('padding-bottom', $hor[0].scrollWidth - $hor.outerWidth());

    // $(window).on('scroll', function () {
    //     var top = $(document).scrollTop();
    //     var lim = $hor.position().top - $hor[0].scrollLeft - ($(window).height() - $hor.outerHeight()) / 2;
    //     var width = $hor[0].scrollWidth - $hor.outerWidth();
    //     var delta = Math.min(Math.max(top - lim, 0), width);
        
    //     requestAnimationFrame(function() {
    //         $hor[0].scrollLeft = delta;
    //     });
        
    //     $("body").css({'padding-top': delta, 'padding-bottom': width - delta});
    // });


    let slider = $('.owl-carousel');
    slider.each(function () {
      $(this).owlCarousel({
        nav: true,
        loop: false,
        dots: false,
        pagination: false,
        margin: 25,
        autoHeight: false,
        stagePadding: 50,
        responsive:{
          0:{
            items: 1,
            stagePadding: 0,
            margin: 30,
          },
          768:{
            items: 2,
            stagePadding: 25,
          },
          1200:{
            items: 3,
            stagePadding: 25,
          },
          1536:{
            items: 3,
            stagePadding: 25,
          },
          1920:{
            items: 3,
          }
        }
      });
    });
    

    // var $hor2 = $("#horizontal-sec");

    // $("body").css('padding-bottom', $hor2[0].scrollWidth - $hor2.outerWidth());

    // $(window).on('scroll', function () {
    //     var top2 = $(document).scrollTop();
    //     var lim2 = $hor2.position().top - $hor2[0].scrollLeft - ($(window).height() - $hor2.outerHeight()) / 2;
    //     var width2 = $hor2[0].scrollWidth - $hor2.outerWidth();
    //     var delta2 = Math.min(Math.max(top2 - lim2, 0), width2);
        
    //     requestAnimationFrame(function() {
    //         $hor2[0].scrollLeft = delta2;
    //     });
        
    //     $("body").css({'padding-top': delta2, 'padding-bottom': width2 - delta2});
    // });
});
