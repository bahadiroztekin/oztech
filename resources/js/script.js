$(document).ready(function() {
    
    /* sticky nav */
    $('.js--section-features').waypoint(function(direction) { 
        if (direction == "down") {
            $('nav').addClass('sticky');    
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '69px;'
    });
    
    /* scroll on BUTTONS */
    $('.js--scroll-to-products').click(function() { 
        $('html, body').animate({scrollTop: $('.js--section-best-sellers').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() { 
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    /* NAV scroll */
    $(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    } 
  });
});
    
   /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    })
    
    
    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i'); 
       
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
    
    
    
});





