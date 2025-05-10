document.getElementById("menos").addEventListener("click", function(){
    let valor = parseInt(document.getElementById("resultado").textContent) // "1" --> 1 .... ParseInt(valor) //valor actual
    valor = valor - 1
    
    let etiqueta = document.getElementById("resultado")
    etiqueta.textContent = valor
})

document.getElementById("mas").addEventListener("click", function(){
    let valor = parseInt(document.getElementById("resultado").textContent) // "1" --> 1 .... ParseInt(valor)
    valor = valor +1
    
    let etiqueta = document.getElementById("resultado")
    etiqueta.textContent = valor
})

document.getElementById("resetear").addEventListener("click", function() {
    let etiqueta = document.getElementById("resultado");
    etiqueta.textContent = 0
})