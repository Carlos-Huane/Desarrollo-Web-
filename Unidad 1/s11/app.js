// palabra = "hola 123 123 "

// //let, var, const 
// console.log(palabra)

// var nombre = "pepito"

// function saludar(){
//     // var nombre = "Carlos"
//     console.log("hola "+ nombre)
// }

// console.log("el nombre es: "+ nombre)


// saludar()

function saludar(){
    let saludo = "Pepe";
    {
        let saludo = 'Carlos';
    }
    console.log(saludo)
}


var palabra;

console.log(palabra);


const variable = 2;
console.log(variable)



// TIPOS DE DATOS

var perro;
console.log(typeof(perro))  //variable de tipo undefined

var numero = 100

console.log(typeof(numero))  //variable de tipo number: donde abarca enteros, decimales o negativos.

var palabra = "un ejemplo, estoy escribiendo y este texto es de tipo string";

console.log(typeof(palabra)) //variable de tipo de string

var prueba = true;
console.log(typeof(prueba))  // variable de tipo de dato: booleano

//comentarios de una sola linea
/*quiero realizar comentarios
 en varias lineas
 saludarasd
 saludarasd
 comentarios de varias lineas 
*/

//substrings:
str = 'primero segundo tercero';
texto_1 = str.indexOf('segundo');
alert(texto_1);

console.assert(str.indexOf('primero') === 0);
console.assert(str.indexOf('primero') === -1); //saldra error porque seria -1 si no existiera la palabra: primero
console.assert(str.indexOf('tercero') === 1); //saldra error debe ser: segundo
