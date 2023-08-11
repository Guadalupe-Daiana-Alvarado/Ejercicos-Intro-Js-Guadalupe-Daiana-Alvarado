
 /* ----------------------------////////////////////-----------------EJERCICOS BUCLES ---------------------------////////////////////----------------*/


  /* --------------------------------------/// EJERCIO 1*/
/* Realizar un programa que permita el ingreso de un número y muestre su tabla de
multiplicar (Los primeros 10 múltiplos). */


/* let num = parseInt(prompt("Ingresa un número"))

 for ( let i = 1; i <= 10; i++){
     console.log(`${num} x ${i} = ${num * i}`);
 } */

  /* --------------------------------------/// EJERCIO 2*/

/* let numeros = []

while(numeros !== 0){
  numeros = Number(prompt( ("Ingresa un número (para terminar ingrese 0):"))); 
  
}

alert(`La lista es: ${numeros}`); */
  /* --------------------------------------/// EJERCIO 4*/

/* Realizar un programa que reciba un número y muestre de alguna forma todos sus
divisores. */
// Solicitar al usuario que ingrese un número

/* let numero = Number(prompt("Ingrese un número:"));

console.log(`Los divisores de ${numero} son:`);

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
} */


  /* --------------------------------------/// EJERCIO 5*/
/* Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre
 un mensaje por consola con cada uno de los elementos del array.
 */
/*
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const inicio of array ) {
   console.log(`Elemento : ${inicio}`);
} 
 */

  /* --------------------------------------/// EJERCIO 6*/
/* Dado un array de 10 números, realizar un programa que muestre por consola el doble
de cada uno de los elementos. */
/*
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const inicio of array ) {
   console.log(`Elemento : ${inicio} x 2 = ${inicio*2}`);
} /*

  /* --------------------------------------/// EJERCIO 7*/
/* Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que
muestre un mensaje de presentación por cada elemento del array */

/*   const miFamilia = [
    { nombre: "Miguel", edad: 26, altura: 1.75, fechaNacimiento: "01/01/1996" },
    { nombre: "Cele", edad: 28, altura: 1.68, fechaNacimiento: "03/05/1993" },
    { nombre: "Maxi", edad: 30, altura: 1.80, fechaNacimiento: "12/12/1990" },
    { nombre: "Arely", edad: 11, altura: 1.4, fechaNacimiento: "22/06/2012" },
    { nombre: "Demmir", edad: 7, altura: 1.1, fechaNacimiento: "05/11/2016" }
  ];
  
  for(let familiar of miFamilia) {
    console.log(`Mi nombre es ${familiar.nombre}. Tengo ${familiar.edad} años, mido ${familiar.altura} m y mi fecha de nacimiento es ${familiar.fechaNacimiento}.`);
  }
   */

  /* --------------------------------------/// EJERCIO 8*/
/* Dado un array de 10 números, realizar un programa que recorra el array y solo muestre
los números impares. */
/* 
const numeros = [20, 51, 5, 85, 36, 98, 75, 63, 99, 28];

for(let i = 0; i < numeros.length; i++) {
  if(numeros[i] % 2 !== 0) {
    console.log(numeros[i]);
  }
}
 */


  /* --------------------------------------/// EJERCIO 9*/
/* Realizar un programa que permita la entrada de números y calcule la suma de los
números pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el
usuario ingresa un 0.  */

/* let numIngresado = [Number(prompt("Ingrese un numero"))]
numIngresado.push( Number(prompt("Ingrese un numero")))
numIngresado.push( Number(prompt("Ingrese un numero")))
numIngresado.push( Number(prompt("Ingrese un numero")))

let numImpar = 0
let numPar = 0
for(let i of numIngresado) {

  if( i % 2 !== 0) {
    numImpar =+ i
    console.log(numImpar);
  }else { 
    numPar =+ i
    console.log(numPar);
  }
} */

  /* --------------------------------------/// EJERCIO 10*/
/* Dado un array de 10 números, realizar un programa que imprima por pantalla el
número más grande */
// Array de 10 números
/* const numeros = [15, 6, 9, 23, 8, 14, 17, 4, 11, 55];

let numeroMasGrande =[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i];
    }
}
console.log("El número más grande es:", numeroMasGrande);


 */
