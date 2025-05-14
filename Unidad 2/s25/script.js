// let contador = 1
// for (let i = 0; i<10; i=i+2){
//     console.log("la repetición actual es: " + contador)
//     console.log("el iterador actual (i) es: " + i)
//     console.log("---------------------------")
//     contador++
// }


let lista = ["carlos", "pepito", "juan", "maria", "jose", "ana","pep","Matias", "Albert", "Elifeleth","Darwis","Prueba"]

// console.log(lista[0])
// console.log(lista[1])
// console.log(lista[2])
// console.log(lista[3])
// console.log(lista[4])
// console.log(lista[5])
for(let i = 0; i<lista.length; i=i+1) {
    console.log("Persona " + (i+1) + " es: " + lista[i])
}