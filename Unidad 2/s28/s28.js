/*function suma(a, b) {
    let resultado = a+b;
    return resultado;
}


let operacion = suma(22, 10)

console.log(operacion)

console.log(suma(2,3))

// Crea la funcion llamada resta con 2 argumentos d, e . al final imprimes resta(2,4)

function saludar(nombre, edad) {
    console.log("Buenos días " + nombre + " tienes :" + edad + " años")
}

// saludar('Carlos', 24)
let mensaje = saludar('Carlos', 24)
console.log(mensaje)

*/

function puede_votar(edad) {
    if (edad >= 18) {
        console.log("Puede votar.");
    } else {
        console.log("NO puede votar. Espera cuando tengas 18 años");
    }
}

function validadEdad(edad){
    if (edad >= 18) {
        return true
    } else {
        return false
    }
}
puede_votar(20);
puede_votar(14);

if(validadEdad(20)){
    console.log("estas permitido")
} else{
    console.log("ddddd")
}


// ECMAScript 6
/*function suma(a, b) {
    let resultado = a+b;
    return resultado;
}
*/

let suma = (a, b) => a+b;

let resta = (a, b) => {
    let resultado = a-b;
    return resultado
}

function valor1(){
    return 3;
}
let valor = () => 3;
console.log(resta(10, 2))