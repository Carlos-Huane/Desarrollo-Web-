
let contador = 0;
var condicional = false;
/*
while(condicional === false) {
    contador++;
    if(contador >= 30) {
        condicional = true
    }
    console.log(contador)
}

console.log("contador: " + contador)
*/

// Reto 1
// ¿Cómo hacemos para imprimir los números pares del 1 al 100?: Modificamos la condición para que el bucle corra mientras number sea <= 100.
/*
let  number = 2;
while (number <=100){
console.log(number);
number +=2;
}
 */

// Reto 2
// ¿Cómo hacemos para imprimir los números impares del 1 al 12?: Inicializamos el valor de number con el valor de 1 (en lugar de 0)
/*
let  number2 = 1;
while (number2 <= 12){
    console.log(number2);
    number2 +=2;
}
*/
// Reto 3
// ¿Cómo hacemos para imprimir todos los números pares e impares del 1 al 12?: En la segunda sentencia del while, incrementamos number en 1 (en lugar de 2) cada ciclo.
/*
let number3 = 1;
while (number3 <= 12) {
    if (number3 % 2 === 0) {
        console.log(number3 + " es un numero par");
    } else {
        console.log(number3 + " es un numero impar");
    }
    number3 += 1;
}
 */

// RECORRER ARREGLOS

const paises = ['perú', 'uruguay', 'chile', 'colombia']
let i = 0;

while(i < paises.length) {
    console.log(paises[i]);
    i++
}


// DO WHILE

let iterador = 0;
console.log("do-while")
do {
    iterador++;
    console.log(iterador);
} while(iterador<5)

// WHILE
console.log("while")
let iterador2 = 0
while(iterador2<5){
    iterador2++
    console.log(iterador2)
}
