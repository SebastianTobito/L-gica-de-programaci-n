//1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

console.log("¡Bienvenidooo!");

//2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, 
//utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

let nombre = "Enzo";
console.log(`¡Hola ${nombre}!`);

//3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

let nombre2 = "Lola";
alert(`¡Hola, ${nombre2}!`);

//4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
//Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let pregunta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(pregunta);

/*5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.*/

let valor1 = 7;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

/*6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.*/

let valor3 = 17;
let valor4 = 12;
let resultado2 = valor3 - valor4;
console.log(`La diferencia entre ${valor3} y ${valor4} es igua a ${resultado2}.`);

//7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
//utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edadUsuario = parseInt(prompt("Por favor ingresa tu edad"));

if(edadUsuario >= 18){
 console.log("Eres mayor de edad puedes ingresar");
}else{
   console.log("Lo sentimos no eres mayor de edad, no puedos ingresar");
}

//8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, 
//negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = parseInt(prompt("Por favor ingresa un número"));

if(numero > 0){
  console.log("Este es un número positivo");
}else if(numero < 0 ){
  console.log("Este es un número positivo");
}else{
    console.log("Tu número es 0");
}

//9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let number = 1;

while( number <= 10 ){
    console.log(number);
    number++
}

//10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor 
//o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = 9;

if(nota >= 7){
  console.log("Felicidades, estás aprobado");
}else{
    console.log("lo sentimos, estás reprobado");
}

//11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

console.log(Math.random());

//12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

console.log(Math.floor(Math.random()*10)+1);

//13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

console.log(Math.floor(Math.random()*1000)+1);