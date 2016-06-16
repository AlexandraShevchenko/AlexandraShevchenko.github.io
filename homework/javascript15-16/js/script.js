$(function(){
  $('#form').submit(function(e) {
    e.preventDefault();

  var text = $('#search').val();
  console.log("text",text)

$.ajax({
  url:"https://pixabay.com/api/?key=2714307-54c654f67ca3fd61019f64f4c&q= '+ text +' &image_type=photo",
  dataType : "jsonp",
  success: function(data){
    console.log("data",data);
    var ul = document.createElement("ul");
   $.each(data.hits, function(i, val){
           var li = document.createElement("li");
           console.log('data.hits',data.hits);
          var inner = '<img class="photo" src="' + val.webformatURL + '">' +
          '<p><a href="'+ val.pageURL+'" title="'+val.pageURL+'" target="_blank">'+val.pageURL+'</a></p>' +
          '<p class="users">Фотограф: '+ val.user + '</p>';
           li.innerHTML = inner;
           ul.appendChild(li);
    });
    $('#results').html(ul);
  },
});
});
});
