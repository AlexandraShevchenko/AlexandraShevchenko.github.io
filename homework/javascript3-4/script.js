var newDom = {
  test: function (element, num) {
    var newTitle = document.createElement('h2');
    newTitle.innerHTML = "Тест по программированию";
    document.body.appendChild(newTitle);

    for (var i = 1; i <= num; i++) {
      var newElement = document.createElement(element);
      var newItem = document.createElement('li');
      newItem.innerHTML = i + ". Вопрос №" + i;
      document.body.appendChild(newElement);
      newElement.appendChild(newItem);

      for (var j = 1; j <= 3; j++) {
        var newList = document.createElement('ul');
        var newLine = document.createElement('li');
        var newInput = document.createElement('input');
        newInput.type = "checkbox";
        newLine.innerHTML += "Вариант ответа №" + j;
        newList.appendChild(newInput);
        newList.appendChild(newLine);
        newItem.appendChild(newList);
      }
    }

    var checkResult = document.createElement('input');
    checkResult.type = "button";
    checkResult.value = 'Проверить мои результаты';
    checkResult.id = 'submit'
    document.body.appendChild(checkResult);
  }
}

newDom.test('ul', 3);
