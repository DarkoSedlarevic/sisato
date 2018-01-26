$(document).ready(function(){

  $('.owl-home-hero').owlCarousel({
    //items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        items:1,
        singleItem: true,
        // autoHeight: true,
        // autoWidth: true,
        // margin: 100
  });

  $('.owl-carousel-cards').owlCarousel({
    //items:1,
        //loop:true,
        //margin:60,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        singleItem: true,
        //autoWidth:true,
        // stageElement: 'ul',
        //itemElement: "",
        responsive:{
        0:{
            items:1,
            // margin:20
        },
        460:{
            items:2,
            margin:20
        },
        860:{
            items:3,
            margin:60,
        }
    }
  });

  //my simple toogle button for wireframe
  // $('#toogle-main-nav').click(function(event) {
        //  $('.main-nav').toggle('show');
    // });

    //Responsive nav js for main site nav
    // Init responsive nav
  //  var navigation = responsiveNav("#main-nav");


  //SmartMenus jQuery init
  $('#main-menu').smartmenus({
    subMenusSubOffsetX: 0,
    subMenusSubOffsetY: -2,
    noMouseOver: true
  });

});

// SmartMenus mobile menu toggle button
$(document).ready(function() {
  var $mainMenuState = $('#main-menu-state');
  if ($mainMenuState.length) {
    // animate mobile menu
    $mainMenuState.change(function(e) {
      var $menu = $('#main-menu');
      if (this.checked) {
        $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
      } else {
        $menu.show().slideUp(250, function() { $menu.css('display', ''); });
      }
    });
    // hide mobile menu beforeunload
    $(window).bind('beforeunload unload', function() {
      if ($mainMenuState[0].checked) {
        $mainMenuState[0].click();
      }
    });
  }
});

$(function(){
  $('.twentytwenty-container').imagesLoaded( function() {
    // check for bug https://github.com/zurb/twentytwenty/issues/39
    $(".twentytwenty-container").twentytwenty({
      default_offset_pct: 0.8,
      no_overlay: true,
      orientation: 'horizontal',
      //move_slider_on_hover: true, // Move slider on mouse hover?
      move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
      //click_to_move: true // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
    });
  });
});
