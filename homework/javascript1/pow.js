window.onload = function () {
    var numb = prompt("укажите число", '');
    var exp = prompt('укажите степень', '');
    var result = Math.pow(numb, exp);

    console.log(result);
}
