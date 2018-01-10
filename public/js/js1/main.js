$(document).ready(function(){

  /* Navbar Toggle on Scroll */
  var scrollTop = 0;
  $(window).scroll(function(){
    var navHeight = $(window).height() - 500;
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if ($(window).scrollTop() > navHeight || (scrollTop >= 35 && $(window).width()<500)) {
      $('#pageNav').addClass('navBarSmall');
    } else {
      $('#pageNav').removeClass('navBarSmall');
    }
  });

  /* Toggle Navbar Class in mobile view on click on navbar toggle button*/
  $(document).on('click', function(evt) {
    if(evt.currentTarget.activeElement.className === 'navbar-toggle'){
      $('#pageNav').addClass('navBarSmall');
    }
    else if(evt.currentTarget.activeElement.className === 'navbar-toggle collapsed'){
      $('#pageNav').removeClass('navBarSmall');
    }
  });

  /* Scroll Effect with in page target links */
  $('a.page-scroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          if(target.selector === '#fun-zone'){
            $('html,body').animate({
              scrollTop: target.offset().top - 150
            }, 900);
            return false;
          }
          else{
            $('html,body').animate({
              scrollTop: target.offset().top - 120
            }, 900);
            return false;
          }
          return false;
        }
      }
    });

});



// function main() {
//
// (function () {
//    'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */

  	// $('a.page-scroll').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: target.offset().top - 40
    //         }, 900);
    //         return false;
    //       }
    //     }
    //   });

    /*====================================
    Show Menu on Book
    ======================================*/
    // $(window).bind('scroll', function() {
    //     var navHeight = $(window).height() - 500;
    //     if ($(window).scrollTop() > navHeight) {
    //         $('.navbar-default').addClass('on');
    //     } else {
    //         $('.navbar-default').removeClass('navBarSmall');
    //     }
    // });
    //
    // $('body').scrollspy({
    //     target: '.navbar-default',
    //     offset: 80
    // });

    /*====================================
    Timeline
    ======================================*/


  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    // $(window).load(function() {
    //     var $container = $('.portfolio-items');
    //     $container.isotope({
    //         filter: '*',
    //         animationOptions: {
    //             duration: 750,
    //             easing: 'linear',
    //             queue: false
    //         }
    //     });
    //     $('.cat a').click(function() {
    //         $('.cat .active').removeClass('active');
    //         $(this).addClass('active');
    //         var selector = $(this).attr('data-filter');
    //         $container.isotope({
    //             filter: selector,
    //             animationOptions: {
    //                 duration: 750,
    //                 easing: 'linear',
    //                 queue: false
    //             }
    //         });
    //         return false;
    //     });
    //
    // });

  	/*====================================
    Pretty Photo
    ======================================*/
	// $("a[rel^='prettyPhoto']").prettyPhoto({
	// 	social_tools: false
	// });

// }());
//
//
// }
// main();
