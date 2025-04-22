let numeroActual="";
let numeroAnterior="";
let numeroDeOperacion="";

let numero=9;
alert(Math.sqrt(numero))
function mostrar(numero){

  numeroActual+=numero;

  document.getElementById("display"). innerHTML = numeroActual
}


function operacion(signo){
  numeroAnterior=numeroActual;
  document.getElementById("displaySuperior").innerHTML=numeroActual+signo
  numeroActual="";
  numeroDeOperacion=signo
}

function igual(){
  document.getElementById("displaySuperior").innerHTML=""
  if(numeroDeOperacion=='+'){
    numeroActual=Number(numeroAnterior)+Number(numeroActual)
  }
}

ocument.getElementById("displaySuperior").innerHTML=""

switch(numeroDeOperacion){
  
}