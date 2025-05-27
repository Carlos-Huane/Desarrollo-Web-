function suma(a, b, c, d ,e) {
    return a+b+c+d+e;
}

console.log(suma(10,2,3,15,16))

/*
function suma(...numeros) {
    // Tomamos solo los primeros 10 elementos del array
    const primeros10 = numeros.slice(0, 10);
    
    // Sumamos esos 10 (o menos si no hay 10)
    return primeros10.reduce((acc, val) => acc + val, 0);
}

// Ejemplos:
console.log(suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
console.log(suma(10, 20, 30)); // 60
console.log(suma(1,2,3,4,5,6,7,8,9,10,11,12)); // 55 (solo los primeros 10)
*/


