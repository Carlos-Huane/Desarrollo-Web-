

document.getElementById("mas").addEventListener("click", function() {
    let valor = parseInt(document.querySelector("#resultado").textContent);  
    console.log(typeof(valor))  
    valor = valor+1;
    let p = document.getElementById("resultado")
    p.innerText = valor
})


document.getElementById("menos").addEventListener("click", function() {
    let valor = parseInt(document.querySelector("#resultado").textContent);   
    valor = valor-1;
    let p = document.getElementById("resultado")
    p.innerText = valor
})

document.querySelector("#resetear").addEventListener("click", function(){
    let p = document.getElementById("resultado")
    p.innerText = 0
})