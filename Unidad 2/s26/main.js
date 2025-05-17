/*
//ejemplo1
//recordamos con este ejemplo lo hecho la clase anterior
//si alguien falto preguntar si vio la grabación: es responsabilidad de las estudiantes
//observar si faltan. Invitarla a estar atenta a este ejemplo:
for (var i = 0; i < 10; i++) {
  alert(i)
}
*/

/*
//ejemplo2
//ya no usaremos var sino let(esto se enseño las primeras clases de js. var ya no es una buena practica usarlo)
let text = ""; //texto vacio
//agregamos a la variable text vacia un número con su salto de linea
//esto formara una cadena de texto(numeros) uno debajo de otro 
for (let i = 0; i < 10; i++) {
  text += i + "<br>";   // ""+ 0 + "br" ,  "0 + br + 1 br +  2 + br .... + 9 + br"
}
//la etiqueta p que tiene el id "demo" agregara lo que contiene text entonces
//lo mostrara en el navegador
document.getElementById("demo").innerHTML = text;
*/



/*
//ejemplo3
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
*/

//*esta clase es viernes y si tenemos acompañamiento en 1 hora realizamos esto, despacio y asegurandonos que todas entiendan y codifiquen con nuestra ayuda.
//*si no tenemos acompañamiento podemos realizar un par más de ejercicios sencillos similares y 
//luego las estudiantes estaran en las salans trabajando en el proyecto final.
