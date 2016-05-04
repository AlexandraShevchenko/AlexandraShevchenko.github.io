$(document).ready(function() {
  $( '.dropdown' ).hover(
      function(){
          $(this).children('.submenu').slideDown(400);
      },
      function(){
          $(this).children('.submenu').slideUp(400);
      }
  );
});

jQuery(document).ready(function(){

jQuery('.dropdown').mouseenter(
  function () {
        jQuery(this).children('.submenu').animate({
        backgroundColor:"black",
    }, 500 );
});

jQuery('.dropdown').mouseleave(function() {
    jQuery(this).children('.submenu').animate({
        backgroundColor:"#0CF",
    }, 500 );
});

});
