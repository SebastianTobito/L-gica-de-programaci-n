//1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. 
//Muestra cada número.
console.log("ejercicio 1");
let contador = 1;
while (contador <=10){
    console.log(contador);
    contador++
}

//2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'.
//Muestra cada número.
console.log("ejercicio 2");
let contador2 = 10;
while(contador2 >= 0 ){
 console.log(contador2);
 contador2--
}
//3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 
//hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numero = prompt("Dame un número para iniciar la cuenta regresiva por favor");
while(numero >= 0){
 console.log(numero);
 numero--
}
//4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0
//hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numero2 = prompt("Dame el número hasta donde quieres que llegue la cuenta");
let numeroInicial = 0
while (numeroInicial <= numero2) {
    console.log(numeroInicial);
    numeroInicial++
}