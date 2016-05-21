var number = prompt('Enter a number', '');
var exponent = prompt('Enter an exponent', '');

function pow(a, b){

  var p = 1;
   if(b == 0){
    a = 1;
   }
   if(b < 0){
    b = -b;
    a = 1/a;
   }
   for(i = 1;i <= b; i++){
    p = p*a;
   }
   return p;
  }

console.log(pow(number, exponent));

module.exports = pow;
