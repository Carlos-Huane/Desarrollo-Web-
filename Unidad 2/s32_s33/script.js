let numero = document.getElementById("numero-tarjeta");

function obtenerNumero() {
    let num = numero.value; //Obtengo el número  en string
    let list = Array.from(num).reverse();
    let list1 = list.map(e => parseInt(e));
    console.log(list1);
    let sum = 0;
    for(let i=0; i<list1.length;i++){
        if(i%2===1){
            if(list1[i]*2 >= 10){
                let r = (list1[i]*2)%10;
                sum = sum + r + (list[i]*2-r)/10;
            } else {
                sum = sum + list1[i]*2;
            }
        } else {
            sum = sum + list1[i];
        }
        console.log(sum);
    }
    console.log(sum);
    return sum;
}



document.getElementById("btn-validar").addEventListener("click", function(){

    let sum = obtenerNumero();
    if(sum%10 === 0){
        alert("la tarjeta es válida");
    } else {
        alert("la tarjeta no es válida")
    }
})