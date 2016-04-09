window.onload = function () {
  var names = [];
  for (var i = 0; i < 5; i++) {
    names[i] = prompt ('enter a name', '');
  }
  var user = prompt ('enter a user's name, '');

  var flag = false;

  for (var i = 0; i < names.length; i++) {
    if (user === names[i]) {
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
