const FLUJO = document.getElementById("flu");
const BOTON = document.getElementById("calcular");
const INPUT = document.getElementById("peso");

BOTON.addEventListener("click",()=>{
   let peso = INPUT.value;

   if (peso === ""){
    console.log("error")
   } else if (peso <= 30) {
    FLUJO.innerHTML = holliday(peso) + " cc";
    FLUJO.style.display = "block";
    ERROR.style.display = "none";
   }else {
    FLUJO.innerHTML = superficieCorporal(peso) + " cc";
    FLUJO.style.display = "block";
    ERROR.style.display = "none";
    FLUJO.innerHTML = superficieCorporal(peso) + " cc";
    FLUJO.style.display = "block";
    ERROR.style.display = "none";
   }
})

function holliday(peso){
    let resultado = 0;
    if(peso<= 10){
        resultado = peso * 100 
        
    }
    else if(peso <= 20) {
        resultado = 1000 + ((peso - 10) * 50)
        
    }
    else if(peso > 20){
        resultado = 1500 + ((peso - 20) * 20)
        
    }
    return resultado
}
function superficieCorporal(peso){
let  resultado = ((peso * 4) + 7)/ (peso + 90)
    return resultado
}

