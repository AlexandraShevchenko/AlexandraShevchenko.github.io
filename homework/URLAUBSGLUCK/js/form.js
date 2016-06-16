$(function(){
  $('#form').submit(function(e) {
    e.preventDefault();

var text = $('#textfield').val();

  $.ajax({
             url:'https://pixabay.com/api/?key=2714307-54c654f67ca3fd61019f64f4c&q= '+ text +' &image_type=photo',
             dataType : "jsonp",

             success: function(data){
              console.log("data",data);

              $.each(data.hits, function(i, val){

              var inner = document.getElementByClassName("GRID-ITEM");

              var inner = '<img src="' + val.webformatURL + '">';
    });
    },
    });
  });
});
