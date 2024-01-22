//Declaramos variables
let numeroSecreto = 6;
let numeroDeUsuario = prompt("Dime un número  entre 1 y 10 por favor:");

//Mostramos el numero en consola
console.log(numeroDeUsuario);

//se hace la comparacion
if (numeroDeUsuario == numeroSecreto) {
    //La respuesta en caso de que se cumpla la condición
    alert(`¡Acertaste!,  el numero es: ${numeroSecreto}`);
}else{
     //La respuesta en caso de que no se cumpla la condición
    alert("No acertaste");
}

