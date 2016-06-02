'use strict';

var title = 'Тест по программированию';

var questions=[
{
    text: "Какие основное ограничения к объявлению переменных в строгом режиме?",
    answers: ["Любая переменная должна объявляться с использованием ключевого слова var",
          "Переменные функций должны объявляться с использованием ключевого слова var",
          "Название переменных должно быть camel-case с маленькой буквы"],
    correctAnswer: 0 // нумерация ответов с нуля!
},
{
    text: "Чему равен this в функциях вызванных на глобальном уровне?",
    answers: ["null",
          "undefined",
          "window"],
    correctAnswer: 1
},
{
    text: "Какой из пунктов не верен по отношению к строгому режиму javascript?",
    answers: ["Запрещено дублирование полей объектов",
          "Запрещено дублирование параметров функции",
          "Запрещено использование директивы eval"],
    correctAnswer: 2
}
];

localStorage.setItem ('test', JSON.stringify(questions));
var test = localStorage.getItem ('test');
var data = JSON.parse(test);

var yourAns = new Array;
var score = 0;


function Engine(question, answer) {yourAns[question]=answer;}

function Score(){
   var answerText = "Результаты:\n";
   for(var i = 0; i < yourAns.length; ++i){
    var num = i+1;
    answerText=answerText+"\n    Вопрос №"+ num +"";
    if(yourAns[i]!=questions[i].correctAnswer){
        answerText=answerText+"\n    Правильный ответ: " +
        questions[i].answers[questions[i].correctAnswer] + "\n";
      }
        else{
        answerText=answerText+": Верно! \n";
        ++score;
        }
       }

   answerText=answerText+"\nВсего правильных ответов: "+score+"\n";

   /*alert(answerText);*/
   yourAns = [];
   score = 0;

   $(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
	$('#score').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form')
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
});

   clearForm("quiz");
}
function clearForm(name) {
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
    if(f.elements[i].checked)
        f.elements[i].checked = false;
      }
}



/*var first = {
  question: "Сколько будет 2*5?",
  option1: 5,
  option2: 10,
  option3: 2
};

var second = {
  question: "Сколько будет 3*6?",
  option1: 6,
  option2: 18,
  option3: 22
};

var third = {
  question: "Сколько будет 10/5?",
  option1: 5,
  option2: 0,
  option3: 2
};

localStorage.setItem ('question1', JSON.stringify(first));
localStorage.setItem ('question2', JSON.stringify(second));
localStorage.setItem ('question3', JSON.stringify(third));

var test1 = localStorage.getItem ('question1');
var test2 = localStorage.getItem ('question2');
var test3 = localStorage.getItem ('question3');

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

newDom.test('ul', 3);*/
