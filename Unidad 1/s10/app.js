function suma( a , b) {
    return a + b
}


console.log(suma(1, 5)) //6


function resta(a, b) {
    return a-b
}

let valor = resta(10, 5)  // let valor = 5 

console.log(valor)




let palabra = "Alvaro"

console.log("La cantidad de letras de " + palabra +  " es:" + palabra.length)


let palabra2 = "hola mundo" 

console.log(palabra2.length)



let arreglo = [8, 'z', 't', 9,10,23,12,12,3,123,2] //tipo de dato: arreglo


let a = [6, 1, 'e', 'x']
console.log(a[2])


// <, >, <=, >=, ===, !=, == (dan como valores booleanos: true o false)



console.log(23 === 23)   //true

console.log(23 == 23)    //true
console.log(23 == "23")  //true (solo comparo el valor)
console.log(23 === "23") //false   (solo comparo el valor y tipo de dato)