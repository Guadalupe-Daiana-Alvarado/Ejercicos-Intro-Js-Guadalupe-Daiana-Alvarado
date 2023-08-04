
 /* ----------------------------////////////////////-----------------EJERCICOS FUNCIONES---------------------------////////////////////----------------*/
/* EJERCICIO 1 */

/* function saludar (nombre){
    console.log(`Hola mi nombre es ${nombre}`);
}
saludar("Guada")
 */

/* EJERCICIO 2 */

/* Crea una función llamada "multiplicar" que reciba dos parámetros numéricos y
devuelva el resultado de la multiplicación de ambos. Llama a la función con dos valores 2 diferentes y muestra el resultado en la consola. */

/* 
function multiplicar (numeroUno, numeroDos){
    let resultado= numeroUno * numeroDos
    return resultado
}
console.log(multiplicar(10, 2));
console.log(multiplicar(50, 5));
 */

/* EJERCICIO 3 */
/* 
Crea una función llamada "areaTriangulo" que reciba dos parámetros numéricos que
representen la base y la altura de un triángulo, y devuelva el área del mismo. Luego,
crea otra función llamada "perimetroTriangulo" que reciba tres parámetros numéricos
que representen los lados de un triángulo, y devuelva el perímetro del mismo. Utiliza
estas funciones para calcular el área y el perímetro de un triángulo con base 5 y altura
3 y lados de 4, 5 y 6 respectivamente. */

/* function areaTriangulo (numBase, numAltura){
    let area = numAltura * numAltura
    return area
}

function perimetroTriangulo (ladoUno, ladoDos, ladoTres){
    let perimetro = ladoUno + ladoDos + ladoTres 
    return perimetro
}
console.log(areaTriangulo(5, 3));
console.log(perimetroTriangulo(4, 5, 6));
 */

/* EJERCICIO 4 */

/* Crea una función llamada "calcularPrecio" que reciba dos parámetros numéricos que
representen el precio y la cantidad de un producto, y devuelva el precio total de la
compra. Si la cantidad de productos es mayor o igual a 10, aplica un descuento del
10% al precio total. Si la cantidad de productos es mayor o igual a 20, aplica un
descuento del 20% al precio total. Llama a la función con diferentes valores de precio y
cantidad para verificar que funcione correctamente */

/* function calcularPrecio (precio, cantidad){
    let precioTotal = precio * cantidad
    let descuento= 0

    if (cantidad >= 10){
        descuento = precioTotal * 0.1;
    }else if (cantidad >= 20) {
        descuento = precioTotal * 0.2;
    }
    
    return precioTotal - descuento
}
console.log(calcularPrecio(10, 100));
console.log(calcularPrecio(20, 15));
console.log(calcularPrecio(30, 5));
console.log(calcularPrecio(65, 8));

 */

/* EJERCICIO 5 */
/* Crea una función llamada "esMayorDeEdad" que reciba un parámetro numérico que
represente la edad de una persona, y devuelva un mensaje que indique si la persona
es mayor de edad o no. Si la edad es mayor o igual a 18, el mensaje debe decir "Eres
mayor de edad". Si la edad es menor a 18, el mensaje debe decir "Eres menor de edad".
Utiliza el operador ternario para implementar esta función. Llama a la función con
diferentes valores de edad para verificar que funcione correctamente.
 */
/* let mayoriaDeEdad =18
 function esMayorDeEdad (edadUsuario) {
    if (edadUsuario >= mayoriaDeEdad){
        console.log("Eres mayor de edad");
    }else if(edadUsuario <= mayoriaDeEdad){
        console.log("Eres menor de edad");
    }
 }
 let edadUsuario = Number(prompt("Ingrese su edad:"))

 edadUsuario >= 18 ? console.log("Eres mayor de edad") : console.log("No eres mayor de edad");
 */


/* EJERCICIO 6*/
/* Crea una función llamada "calcularImpuesto" que tome un parámetro numérico que
represente el ingreso anual de una persona, y devuelva el impuesto que debe pagar. Si
el ingreso es menor o igual a $10,000, el impuesto es del 10% del ingreso. Si el ingreso
es mayor a $10,000 pero menor o igual a $20,000, el impuesto es del 15% del ingreso.
Si el ingreso es mayor a $20,000, el impuesto es del 20% del ingreso. Utiliza
condicionales anidados para implementar esta función. Llama a la función con
diferentes valores de ingreso para verificar que funcione correctamente.
 */

/* let ingresoAnualXPersona
let impuesto = 0
function calcularImpuesto (ingresoAnualXPersona){
    if (ingresoAnualXPersona <= 10000 ){
         impuesto = ingresoAnualXPersona * 0.1
    }else if(ingresoAnualXPersona <= 20000){
         impuesto = ingresoAnualXPersona *0.15
}
   return ingresoAnualXPersona+impuesto
}
console.log(calcularImpuesto(10000));
console.log(calcularImpuesto(8000));

console.log(calcularImpuesto(20000));
console.log(calcularImpuesto(40000));
 */

/* EJERCICIO 7 */
/* Crea una función llamada "verificarDia" que reciba un parámetro numérico que
represente el número del día de la semana, y devuelva un mensaje que indique si es un
día laboral o no. Si el número es 1, 2, 3, 4, 5, el mensaje debe decir "Es un día laboral". Si
el número es 6 o 7, el mensaje debe decir "Es fin de semana". Utiliza la estructura de
control switch anidada para implementar esta función. Llama a la función con
diferentes valores de día para verificar que funcione correctamente. 
 */
/* let diaDeSemana = Number(prompt("ingrese un numero de dia de la semana, ej: Lunes: 1 - Martes: 2"))
 */
/* function verificarDia (diaDeSemana){
    if(diaDeSemana <= 5){
        console.log("Es dia laboral");
    }else if(diaDeSemana = 6||7){
        console.log("Es fin de semana");
    }
}
 */

/* switch (diaDeSemana) {
    case 1:
        console.log("Es dia laboral")
        break;
        case 2:
            console.log("Es dia laboral")
            break;
            case 3:
                console.log("Es dia laboral")
                break;
                case 4:
                    console.log("Es dia laboral")
                    break;
                    case 5:
                        console.log("Es dia laboral")
                        break;
                        case 6:
                            console.log("Es fin de semana")
                            break;
                            case 7:
                                console.log("Es fin de semana")
                                break;
                            default:
                                console.log("No es un dia semanal, intente de nuevo");
                                break;
}
 */


