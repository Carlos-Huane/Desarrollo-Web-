let frutas = ["naranja", "pera", "platano", "lúcuma"] //tipo de dato: arreglo

console.log(frutas)

console.log("última fruta: "+frutas[3])


console.log("la cantidad de elementos que contiene mi arreglo frutas es: "+frutas.length)


var puntajeTotal = 0
var puntaje2 = 0
// EVENTOS

// para button id="e1">Click aqui para sumar 1</button>
document.getElementById("e1").addEventListener("click", function(){
    puntajeTotal=puntajeTotal+1
    console.log("el puntaje total es: "+puntajeTotal)
})

// para <button id="e2" onclick=sumar()>Click aqui para sumar 5</button>
function sumar(){
    puntaje2 = puntaje2+5
    console.log("el puntaje total 2 es: "+puntaje2)
}