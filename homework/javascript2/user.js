window.onload = function () {
  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr[i] = prompt ('enter a name', '');
  }
  var user = prompt ('enter a user's name, '');

  var flag = false;

  for (var i = 0; i < 5; i++) {
    if (user === arr[i]) {
      flag = true;
    }
  }
   if (flag == true) {
    alert(user + ', you are now logged in');
   }
   else {
    alert('error');
   }
}
