//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
//muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaDeLaSemana = prompt("Dime pór favor qué dia de la semana es");
if (diaDeLaSemana == "Sabado" || diaDeLaSemana == "Domingo") {
    alert("¡Buen fin de semana!");
} else{
    alert("¡Buena semana!");
}
//2.Verifica si un número ingresado por el usuario es positivo o negativo. 
//Muestra una alerta informativa.
let numeroUsuario = prompt("Ingresa un numero");
if (numeroUsuario > 0) {
    alert("Este es un número positivo");
}else if(numeroUsuario < 0){
    alert("Este es un número negativo");
}else{
   alert("Este numero es cero")
}

//3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
//muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
let puntuacion = prompt("Cuál fue tu puntuacion");
if(puntuacion >= 0 ){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intenta nuevamente para ganar.");
}
//4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
//utilizando un template string para incluir el valor del saldo.
let saldoCuenta = 1000;
alert(`Tu saldo en la cuenta es de ${saldoCuenta}`);

//5. Pide al usuario que ingrese su nombre mediante un prompt. 
//Luego, muestra una alerta de bienvenida usando ese nombre.
let nombreIngresado = prompt("Por favor ingresa tu nombre");
alert(`Bienvenido ${nombreIngresado}`);
