var lenguaje = "Python"
var ciudad = "Lima"
var mensaje = "!Bienvenidos a mi sitio web!"

const single = 'comillas simple';

const double = "comillas dobles";
const backticks = `backticks`; //comillas invertidas




let recepcionista = "pepitoLocal"
let saludo = "Mundo"

//"Hola profe"
console.log('"Hola mundo"') //"Hola mundo
console.log("'Hola mundo'")
console.log("`Hola mundo`")
console.assert(`Hola ${saludo}` === "Hola mundo", "He comparado 2 strings diferentes") //false


var frase2 = "Esta es la primera linea, \nEsta es la segunda linea \nEsta es la tercera linea"
console.log(frase2)
console.log("primer salto \t este es el salto \t\n otro salto \t\t doble tab")

// alert("Hola chicos")
// alert(" este es otro mensaje")

function boton (){
    alert("estoy dando click")
}


console.log(
    "**************************************\n" +
    "**       BBVA BANCOMER, S.A.       **\n" +
    "**       RFC: BBA830831LJ2         **\n" +
    "**************************************\n" +
    "\n" +
    "FECHA: 03/02/21\tHORA: 13:41\tCAJERO: 3383\n" +
    "\n" +
    "DEPÓSITO EN EFECTIVO\n" +
    "\n" +
    "CLIENTE: CONSEJO ESCOLAR DE ADMIN\n" +
    "UBICADO EN:\tCIUDAD GUZMAN C\n" +
    "FECHA DE APLICACIÓN:\t03/02/21\n" +
    "FOLIO NÚMERO: 6374\tAUT: 271808\n" +
    "CUENTA/TARJETA DE ABONO:\t************2881\n" +
    "\n" +
    "IMPORTE:\t\t\t$ 1,200.00\n" +
    "FEC. DEPOSITADO:\t\t$ 1,200.00\n" +
    "CAMBIO ENTREGADO:\t\t$ 0.00\n" +
    "CAMBIO EN RECIBO:\t\t$ 0.00\n" +
    "\n" +
    "MOTIVO DE PAGO:\tBARRAGAN C OMERO\n" +
    "\n" +
    "CUALQUIER ACLARACIÓN ACUDE A TU SUCURSAL\n" +
    "O LLAMA A LÍNEA BBVA AL 01 800 226 2663\n"
  );


  var mensaje ="este Es un menSAje";
  var cantidadLetras = mensaje.length;
  var mensajeMayuscula = mensaje.toUpperCase();
  var mensajeMinuscula = mensaje.toLowerCase()
  
  console.log("Original: "+ mensaje)
  console.log("Mayuscula: "+mensajeMayuscula)
  console.log("Minuscula: "+mensajeMinuscula)

