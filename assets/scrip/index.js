//Variables
//-------------------EJERCICIO DEL 1 al 5
let miNombre = "Guadalupe" ;
let miApellido = "Alvarado" ;
let miEdad = 28 ;
let miMascota = "Lessi" ;
let edadMascota = 9 ;

//-------------------EJERCICIO 6 ???

//-------------------EJERCICIO 7
let nombreCompleto = miNombre + miApellido ;

//-------------------EJERCICIO 8
let textoPresentacion = `Mi nombre completo es ${miNombre} ${miApellido} y tengo ${miEdad} años, tengo una mascota llamada ${miMascota}, que tiene ${edadMascota} años de edad.` ;

console.log(textoPresentacion);
//-------------------EJERCICIO 9
let sumaEdades = miEdad + edadMascota ;
let restaEdades = miEdad - edadMascota ;
let multiplicaEdades = miEdad * edadMascota ;
let divideEdades = miEdad / edadMascota ;

//-------------------EJERCICIO 10
let alumno = {
    nombre : "Daiana",
    altura : 1.65,
    fechaNac : "22/12/1994",
    profesion : "Pastelera",
    trabaja : false ,
}

console.table(alumno)

//-------------------EJERCICIO 11
let miMascotaPerro = {
    raza : "Lassy",
    color : "Marron",
    sexo : "Femenino",
    hijos : true,
    cantidadHijos : 3,
}

console.table(miMascotaPerro)
console.log(miMascotaPerro.raza);
console.log(miMascotaPerro.color);
console.log(miMascotaPerro.sexo);
console.log(miMascotaPerro.hijos);
console.log(miMascotaPerro.cantidadHijos);

//-------------------EJERCICIO 12
let frutas = ["banana", "manzana", "pera", "uva", "kiwi"] ;

console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

//-------------------EJERCICIO 13
/* let soyMayorDeEdad = 18 ;
//let miEdadIngresada = Number( prompt("Ingrese su edad:"));
console.log(miEdadIngresada);
let comparacion = miEdadIngresada >= soyMayorDeEdad
console.log(comparacion);

 */

//-------------------EJERCICIO 14
let numeros = [0,1,2,3,4] ;

console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

//-------------------EJERCICIO 15

let familia = [ 
    {nombre: "Mercedes Sosa", parentezco: "Mama", edad: "Eterna", hobyFavorito: "Viajar", temporadaFavorita: "Primavera"},
    {nombre: "Hector Alvarado", parentezco: "Papa", edad: "Eterno", hobyFavorito: "Viajar", temporadaFavorita: "Todas"},
    {nombre: "Celeste Alvarado", parentezco: "Hermana", edad: "29", hobyFavorito: "Hacer uñas", temporadaFavorita: "Verano"},
    {nombre: "Alexis Alvarado", parentezco: "Hermano", edad: "25", hobyFavorito: "Pescar", temporadaFavorita: "Ninguna"},
    {nombre: "Miguel Condori", parentezco: "Pareja", edad: "28", hobyFavorito: "Futbol y asado", temporadaFavorita: "Primavera"},
    
]
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

//-------------------EJERCICIO 16
let textoAleatorio =  ` A mi me gusta comer frutas, mi favorita es ${frutas[1]} `
console.log(textoAleatorio);

//-------------------EJERCICIO 17

/* let edadIngresadaCompa1 = Number(prompt("Ingrese la edad del compañero numero uno:")) ;
let edadIngresadaCompa2 = Number(prompt("Ingrese la edad del compañero numero dos:")) ;


let edadesIguales = edadIngresadaCompa1 === edadIngresadaCompa2
let soyMayor = edadIngresadaCompa1 > edadIngresadaCompa2
let soyMenor = edadIngresadaCompa1 < edadIngresadaCompa2

console.log(`Mi edad es igual a la de mi compañero ${edadesIguales}`);
console.log(`Mi edad es mayor a la de mi compañero ${soyMayor}`);
console.log(`Mi edad es menor a la de mi compañero ${soyMenor}`);
 */

//-------------------EJERCICIO 18

/* let mayorDeSeis = 7;
let alturaMinima = 120;


let edadIngresadaPorUsuario = Number(prompt("Ingrese su edad:")) ;
let alturaIngresadaPorUsusario = Number(prompt("Ingrese solo el numero de su altura sin cm, ej: 120:")) ;

let puedeSubir = (edadIngresadaPorUsuario >= mayorDeSeis) && (alturaIngresadaPorUsusario >= alturaMinima)

console.log(`¿Puede subir a la atraccion? ${puedeSubir}`);
 */

/* //-------------------EJERCICIO 19
let tipoDePase = prompt("Ingrese su tipo de pase: VIP, NORMAL; LIMITADO").toLocaleUpperCase;
let saldo = Number(prompt("Ingrese su saldo en numeros ej: 1000"));
let puedePasar = (tipoDePase === "VIP") || (saldo >= 1000) ;
console.log(`¿Usted esta autorizado a pasar? ${puedePasar}`); */