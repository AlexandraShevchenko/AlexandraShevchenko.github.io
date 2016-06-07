'use strict';

$(function() {

var html = $('#test').html();
var questions = [
{
    title: 'Тест по программированию'
},
{
    text: "Какие основное ограничения к объявлению переменных в строгом режиме?",
    answer1: "Любая переменная должна объявляться с использованием ключевого слова var",
    answer2: "Переменные функций должны объявляться с использованием ключевого слова var",
    answer3: "Название переменных должно быть camel-case с маленькой буквы",
    correctAnswer: 0 // нумерация ответов с нуля!
},
{
    text: "Чему равен this в функциях вызванных на глобальном уровне?",
    answer1: "null",
    answer2: "undefined",
    answer3: "window",
    correctAnswer: 1
},
{
    text: "Какой из пунктов не верен по отношению к строгому режиму javascript?",
    answer1: "Запрещено дублирование полей объектов",
    answer2: "Запрещено дублирование параметров функции",
    answer3: "Запрещено использование директивы eval",
    correctAnswer: 2,
    button: "Проверить результаты"
}
];

var content = tmpl(html, {
    data: questions
});

  $('body').append(content);


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
});
