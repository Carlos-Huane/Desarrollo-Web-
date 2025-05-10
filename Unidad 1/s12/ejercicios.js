//Operadores matemáticos
var a = 20;
var b = 5;
var c =  10;
var d = 3

var suma = a+b //25
var resta = a-b //15
var multiplicación = b*c //50
var division = b/a // 5/20
var exponente = b**d // 5*5*5 EXPONENTE = 125
var residuo = a%d // 10%3 ....10 = 3(3) + 1 , el resultado de residuo es: 
// console.log("a + b: " + a+b) //"a + b: 20" + 5 = "a + b: 205"

// console.log("a + b: " + (a+b)) //"a + b: 20" + 5 = "a + b: 25"

console.log("a + b: " + suma)

console.log("a - b: " + resta)

console.log("a * b: " + multiplicación)

console.log("a/b: " + division)

console.log("a**b: " + exponente)

console.log("a%b: "+residuo)

var numero = 17
if(!(numero%2 === 0)){
    console.log("es impar")
}
else {
    console.log("es par")
}


// OPERADORES LÓGICOS

// &&-->es el operador conjunción: ^     (significa y)  (basta con que uno de los 2 sea falso para que la operación sea falsa)
// ||-->operador disjunción: o  (^ invertido 180 grados) (significa o) (basta con que uno de los 2 sea verdadero, para que la operación sea verdadera)

"true && true = " + (true && true);                     //true  console.log(true&&true)
"true && false = " + (true && false);                   //false
"true && true && false = " + (true && true && false);   // (true && true && false) === (true && false) === (false)
"false && false = " + (false && false);                 //false

"true || true = " + (true || true);                     //true
"true || false = " + (true || false);                   //true
"true || true || false = " + (true || true || false);   //(true || true || false) === true || false === true
"false || false = " + (false || false);                 //false

// Comentar que también se pueden combinar
"true && (true || false) = " + (true && (true || false)); // (true && (true || false)) === (true && (true)) === true
"false || (true && false) = " + (false || (true && false)); //(false || (true && false)) === (false || (false)) === false