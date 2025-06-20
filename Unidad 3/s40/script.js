let frutas = ["manzanas", "peras", "platanos", "mangos", "sandia"]
frutas.push(3)
// console.log(frutas[0]) // frutas.length -- cantidad de elementos
// console.log(frutas[1])
// console.log(frutas[2])
// console.log(frutas[3])

for(let i = 0; i<frutas.length; i++) {
    console.log(frutas[i])
}

for(var elemento of frutas){
    console.log("2 método: " + elemento)
}

let arregloVacio = []
console.log("digitalize la cantidad de elementos")



let questions = [ ['¿Cuál esú?', 'Lima'], ['¿Cuántos?', 33], ['¿Cuál es?', 'Soles'], [102,320], ["elifelet", "Anshir"]];
console.log(questions[1][1])
console.log(questions[2][1])
console.log(questions[3][0])
console.log(questions[4][1])
console.log(questions[0][0])
console.log(questions[4][0])