let btn = document.querySelector("#idbutton");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let resultado = document.querySelector(".resultado");

btn.addEventListener("click", calcular);

function calcular(){
    let a, b,c;
    a = parseInt(input1.value);
    b = parseInt(input2.value);
    if(isNaN(a)||isNaN(b)){
        window.alert("Que solo numeros, vrga. Tas viendo que aun estoy chiquito v:");
        input1.value="";
        input2.value="";
    }
    else{
        c = a+b;
        resultado.innerText = "El resultado es: "+c;
    }

}