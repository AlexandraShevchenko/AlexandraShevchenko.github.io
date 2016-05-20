(function($) {

  $.fn.myPlugin = function() {

    var $rightUIEl = $('.carousel-next');
    var $leftUIEl = $('.carousel-prev');
    var $elementsList = $('.carousel-list');

    var $pixelsOffset = 225;
    var $currentLeftValue = 0;
    var $elementsCount = $elementsList.find('li').length;
    var $minimumOffset = - (($elementsCount - 5) * $pixelsOffset);
    var $maximumOffset = 0;

  function slideRight() {
    if ($currentLeftValue != $maximumOffset) {
        $currentLeftValue += 225;
        $elementsList.animate({ left : $currentLeftValue + "px"}, 500);
      }
  }

  function slideLeft() {
    if ($currentLeftValue != $minimumOffset) {
      $currentLeftValue -= 225;
      $elementsList.animate({ left : $currentLeftValue + "px"}, 500);
     }
  }

  $rightUIEl.on('click', slideLeft);
  $leftUIEl.on('click', slideRight);

  return this;
}

})(jQuery);
