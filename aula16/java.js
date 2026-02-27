/*

Exemplo 1: 
function parouimpar(n) {
    if (n % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}
let res= parouimpar(22);
alert(`O número é ${res}`)
*/


/*
  Exemplo 2:  
let v = function(x) {
    return x * 5;
}
alert(v(8));
*/



/* Exemplo 3:
function fatorial(n){
    let fat = 1;
    for(let c= n; c>1; c--){
        fat*=c;
    }
    return fat;
}
alert(fatorial(5));
*/

// Exemplo 4 :
function obtemDiadaSemana(){
  return new Date() .getDay();
}
let dia= obtemDiadaSemana();
console.log(dia);