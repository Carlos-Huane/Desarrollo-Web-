let personas = [
    {
        nombre: "carlos",
        edad:12,
        sexo:'m',
    },
    {
        nombre: "pépeito",
        edad:22,
        sexo:'m',
    },
    {
        nombre: "maria",
        edad:19,
        sexo:'f',
    }
]
let contador=1;
/*
for(let i = 0; i<personas.length; i++){
    console.log("N° persona: "+ contador)
    console.log("Nombre: " + personas[i].nombre)
    console.log("Edad: " + personas[i].edad)
    contador++
    console.log("-----------------")
}
*/

for (let i = 0; i<personas.length; i++) {
    // let mensaje = "persona " + (i+1) + " :"
    var variable = ""
    if (i===personas.length-1){
        variable
        var variable = "-----------------------------------------"
    }
    let mensaje = `
        -----------------------------------------
        persona ${i+1} 
        Nombre: ${personas[0].nombre}
        Edad: ${personas[0].edad}
        Género: ${personas[0].sexo}
        ${variable}
    `
    console.log(mensaje)
}