window.onload = function () {
  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr[i] = prompt ('введите имя', '');
  }
  var user = prompt ('введите имя пользователя', '');

  var flag = false;

  for (var i = 0; i < 5; i++) {
    if (user === arr[i]) {
      flag = true;
    }
  }
   if (flag == true) {
    alert(user + ', Вы успешно вошли');
   }
   else {
    alert('error');
   }
}
