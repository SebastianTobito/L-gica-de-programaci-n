
alert('Bienvenido al juego del número secreto');
//Declaramos variables
let numeroSecreto = 6;
let numeroDeUsuario;
let intentos = 1;
//let palabraIntentos = "intento";
let maximosIntentos = 3;

while(numeroDeUsuario != numeroSecreto){
    numeroDeUsuario = prompt("Dime un número  entre 1 y 10 por favor:");
    // Agrega un console.log para verificar el valor de "numeroDeUsurio" después de la entrada del usuario
    console.log('Valor del intento:', numeroDeUsuario);

    //Mostramos el numero en consola
    console.log(numeroDeUsuario);

    //se hace la comparacion
    // Agrega un console.log para verificar la comparación entre "numeroDeUsuario" y "numeroSecreto"
    console.log('Resultado de la comparación:', numeroDeUsuario == numeroSecreto);

    if (numeroDeUsuario == numeroSecreto) {
        //La respuesta en caso de que se cumpla la condición
        alert(`¡Acertaste!,  el numero es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? "intento" : "intentos" }`);
        
    }else{
        if(numeroDeUsuario > numeroSecreto){
            alert("El número secreto es menor");
        }else{
            alert("el número secreto es mayor");
        }
        //incrementamos el contador de intentos cuando no se acierta
        //intentos = intentos + 1;
        //intentos += 1;
       intentos ++; 
       //palabraIntentos = "intentos";
       if (intentos > maximosIntentos) {
        alert(`Llegaste al número máximo de intentos ${maximosIntentos}`);
        break;
       }

        //La respuesta en caso de que no se cumpla la condición
        //alert("No acertaste");
        // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
        console.log('Valor del número secreto:', numeroSecreto);
    }
}




 
