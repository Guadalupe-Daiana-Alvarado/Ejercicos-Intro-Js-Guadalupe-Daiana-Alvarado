
 /* ----------------------------////////////////////-----------------EJERCICOS CONDICIONALES ---------------------------////////////////////----------------*/


  /* --------------------------------------/// EJERCIO 1*/
 /*  Realizar un programa que reciba 2 números y que imprima por consola si el primer
número es mayor que el segundo. */

/* let numeroUno = Number(prompt("Ingrese su primer numero:"))
let numeroDos = Number(prompt("Ingrese su segundo numero:"))

if (numeroUno > numeroDos){
    console.log("El primer numero es mayor al segundo numero ingresado");
}else {
    console.log("El primer numero es menor al segundo numero ingresado");
} */


  /* --------------------------------------/// EJERCIO 2*/
/* Realizar un programa que reciba 2 números y que imprima por consola si los números
2 son iguales o si son diferentes. */
/* let numeroUno = Number(prompt("Ingrese su primer numero:"))
let numeroDos = Number(prompt("Ingrese su segundo numero:"))

if (numeroUno == numeroDos){
    console.log("Los numeros ingresados son iguales");
}else {
    console.log("Los numeros ingresados son diferentes");
}

 */
  /* --------------------------------------/// EJERCIO 3*/
/* Realizar un programa que reciba 2 números y que imprima por consola cuál de los 2
números es el más grande o si son iguales.
 */
/* let numeroUno = Number(prompt("Ingrese su primer numero:"))
let numeroDos = Number(prompt("Ingrese su segundo numero:"))

if (numeroUno > numeroDos){
    console.log("El primer numero es el numero mas grande");
}else if(numeroUno < numeroDos){
    console.log("El segundo numero es el mas grande");
}else {
    console.log("Ambos numero son iguales");
}

 */

  /* --------------------------------------/// EJERCIO 4*/
/* Realizar un programa que reciba 3 números y que imprima por pantalla cual de los 3 es
4 el más chico.
 */
/* let numeroUno = Number(prompt("Ingrese su primer numero:"))
let numeroDos = Number(prompt("Ingrese su segundo numero:"))
let numeroTres = Number(prompt("Ingrese su tercer numero:"))


let numeroMasChico = Math.min(numeroUno, numeroDos, numeroTres);
console.log(`El numero mas chico es el ${numeroMasChico}`);
 */


  /* --------------------------------------/// EJERCIO 5*/
/* Realizar un programa que reciba 2 objetos representando personas con las propiedades:
● nombre
● edad
● altura
y que imprima por pantalla:
1. cual de las dos personas es la más alta
2. cual es la de mayor edad.
5 */

/* let personaUno = {
    nombre: prompt("Ingrese el nombre de la primer persona:"),
    edad: prompt("Ingrese la edad de la primer persona:"),
    altura: prompt("Ingrese la altura de la primer persona:"),
  };

  let personaDos = {
    nombre: prompt("Ingrese el nombre de la segunda persona:"),
    edad: prompt("Ingrese la edad de la segunda persona:"),
    altura: prompt("Ingrese la altura de la segunda persona:"),
  };
  
let personaMasAlta;
if (personaDos.altura > personaUno.altura) {
  personaMasAlta = personaDos;
} else {
  personaMasAlta = personaUno;
}
console.log(`La persona mas alta es la ${personaMasAlta.nombre}`);


let personaMayorEdad;
if (personaDos.edad > personaUno.edad) {
  personaMayorEdad = personaDos;
} else {
  personaMayorEdad = personaUno;
}
console.log(`La persona de mayor edad es la ${personaMayorEdad.nombre}`);
   */



  /* --------------------------------------/// EJERCIO 6*/
/* Realizar un programa que permita ingresar por pantalla:
● tu nombre
● tu edad
● tu altura
● tu visión
y determine si estás capacitado para conducir, para saber esto la persona deberá
● Tener edad mínima de 18 años.
● Medir más de 150 cm.
● Tener una visión como mínimo de 8 de 10. */


/* let persona = {
    nombre: prompt("Ingrese su nombre:"),
    edad: prompt("Ingrese su edad:"),
    altura: prompt("Ingrese su altura:"),
    vision: prompt("Ingrese su rango de vision del 1 al 10:"),
  };
  let edadApta = 18;
  let alturaApta = 150;
  let visionMinima = 8;
  
  function estaCapacitado(edad, altura, vision) {
    if (edad >= edadApta && altura >= alturaApta && vision >= visionMinima) {
      console.log("Usted es apto para conducir");
    } else {
      console.log("Usted no es apto para conducir");
    }
  }

  estaCapacitado(persona.edad, persona.altura, persona.vision);
 */



  /* --------------------------------------/// EJERCIO 7*/
/* Realizar un programa que permita el ingreso por pantalla de los siguientes datos:
● Nombre del cliente.
● Pase ( vip o normal )
● Si posee entrada ( si o no ).
Las personas que posean:
Tú mismo nombre tienen ingreso libre ( mostrar un mensaje de bienvenida ) ó
Pase vip tienen ingreso libre ( mostrar un mensaje de bienvenida )
Si posee entrada preguntar ¿desea utilizarla?, en caso:
afirmativo ( mostrar un mensaje de bienvenida )
Y por último en caso de:
No tener el mismo nombre y no tener un pase vip y no tener entrada, preguntar ¿desea comprar?
en caso:
negativo ( mostrar mensaje de despedida )
afirmativo preguntar dinero disponible, si posee:
 $1000 o mas, ( mostrar un mensaje venta exitosa y de bienvenida )
Menos de $1000 ( mostrar un mensaje de rechazo de venta )
 */


/*
let nombre = prompt("Ingresa tu nombre");

switch (nombre) {
  case "guadalupe":
    alert(`Bienvenido/a ${nombre} tiene pase libre.`);
    break;

  default:
    let tieneEntrada = prompt("¿Tiene entrada si o no?");
    if (tieneEntrada === "si") {
      alert(`Bienvenido/a ${nombre} tiene pase comun`);
    } else {
      let compraEmtrada = prompt("¿Deseas comprar una entrada si o no?");
      if (compraEmtrada === "si" ) {
        dineroDisponible = prompt("Ingresa tu dinero disponible");
        if (dineroDisponible >= 1000) {
          alert(`Bienvenido/a ${nombre} compra realizada.`);
        } else {
          alert(`Dinero insuficiente, gracias por visitarnos ${nombre}.`);
        }
      } else {
        alert(`Gracias por visitarnos ${nombre}.`);
      }
    }
    break;
}

  /* --------------------------------------/// EJERCIO 8*/
/* Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar,
un mensaje que diga: “Ganaste, has adivinado el número.” No te preocupes si usas
mucho código repetido, más adelante verás cómo realizar este juego de manera más
eficiente. */




/* let intentos = 3;
let numeroIncognita = 5;

let adivinaUno = Number(prompt("Adivina el número primer intento:"));

if ( adivinaUno == numeroIncognita){
  alert("Ganaste, has adivinado el numero incognita");

}else if(adivinaUno != numeroIncognita){
  adivinaUno = Number(prompt("Adivina el número segundo intento:"))
 
}else if(adivinaUno == numeroIncognita){
  alert("Ganaste, has adivinado el numero incognita");

}else if(adivinaUno != numeroIncognita){ 
  adivinaUno = Number(prompt("Adivina el número ultimo intento:"))
}else if (adivinaUno == numeroIncognita) {
  alert("Ganaste, has adivinado el numero incognita");
}else { alert("Gracias por participar") }
 */

  /* --------------------------------------/// EJERCIO 9*/
/* Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años),
adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (más de 45
años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando
si en realidad tiene esa edad. */
/* let edadd = Number(prompt("Ingrese su edad:"));

if (edadd >= 0 && edadd <= 12) {
    console.log("Eres un infante")
}else if(edadd >=13 && edadd <= 18){
    console.log("Eres un adolescente")
}else if (edadd >= 19 && edadd <= 45) {
    console.log("Eres un joven mayor")
}else if (edadd >= 46 && edadd <= 100) {
    console.log("Eres un adulto mayor")
}else if (edadd > 100){
    console.log("De verdad tienes esa edad?")
}

 */


  /* --------------------------------------/// EJERCIO 10*/
/* Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cuál de los 2 ha ganado o si han empatado. En caso
de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa.
 */






let xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx = 54




  /* --------------------------------------/// EJERCIO 11*/
/* Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones:
● Blanco o Negro: Falta de color.
● Verde: El color de la naturaleza.
● Azul: El color del agua.
● Amarillo: El color del sol.
● Rojo: El color del fuego.
● Marrón: el color de la tierra.
● y para cualquier otro valor: Excelente elección, no lo teníamos pensado. */

/* let ingreseColor= prompt("Ingrese un color")

switch (ingreseColor) {
  case "blanco":
      alert("Falta de color");
  break;
  case "negro": 
      alert("Falta de color");
  break;
  case "verde": 
      alert("El color de la naturaleza");
  break;
  case "amarillo": 
      alert("El color del sol");
  break;
  case "rojo": 
      alert("El color del fuego");
  break;
  case "marron": 
      alert("El color de la tierra");
  break;  
  case "azul": 
      alert("El color del agua");
  break;
  default:
    alert("Excelente eleccion, no lo teniamos pensado.");
    break;
} */


  /* --------------------------------------/// EJERCIO 12*/
/* Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0. */
/* let operacion= prompt("Ingrese una operacion, suma, resta, multiplicacion, division")
let numeroUno= prompt("Ingrese su primer numero")
let numeroDos= prompt("Ingrese su segundo numero")

/* Number.parseInt */

/* switch (operacion) {
  case "suma":
    alert(`El resultado de ${numeroUno} + ${numeroDos} = ${numeroUno+numeroDos}`) 
    break;
  case "resta":
    alert(`El resultado de ${numeroUno} - ${numeroDos} = ${numeroUno-numeroDos}`) 
    break;
  case "multiplicacion":
      alert(`El resultado de ${numeroUno} * ${numeroDos} = ${numeroUno*numeroDos}`) 
      break;
  case "division":
        alert(`El resultado de ${numeroUno} / ${numeroDos} = ${numeroUno/numeroDos}`) 
        break;
  default:
    alert("Operacion no valida")
    break;
}
 */



  /* --------------------------------------/// EJERCIO 13*/
/* Crear un programa que permita ingresar todos los datos de tu documento nacional de
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni
con todos los datos ingresados y mostrarlos por consola con console.table() más un
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes. */




let xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx = 0