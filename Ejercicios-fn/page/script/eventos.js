/* 1° - Crear una aplicación que muestre un cuadrado de color gris. 
Debajo deberá haber un botón que diga “Cambiar”, al hacer click sobre el botón, el color de relleno el cuadrado deberá cambiar a celeste.
Extras:
● Al hacer nuevamente click el color del cuadrado deberá cambiar a rojo.
● Lograr que cada vez que haya un cambio de color aparezca el nombre del color
dentro del cuadrado. */

let $cuadrado = document.getElementById("cuadrado1")
let $btn = document.getElementById("btn1")

$cuadrado.addEventListener("click", cambiarColor)
$btn.addEventListener("click", cambiarColor)


function cambiarColor() {
    if ($cuadrado.style.backgroundColor === "gray" ) {
      $cuadrado.style.backgroundColor = "blue";
      $cuadrado.textContent = "Celeste";
    } else if ($cuadrado.style.backgroundColor === "blue") {
      $cuadrado.style.backgroundColor = "red";
      $cuadrado.textContent = "Rojo";
    } else {
      $cuadrado.style.backgroundColor = "gray";
      $cuadrado.textContent = "Gray";
    }
  }

/* 2° - Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá
haber un input de texto, al escribir en el input de texto, los que se esté escribiendo
deberá aparecer impreso dentro del cuadrado.
Extras:
● Crea un botón para borrar el contenido del cuadrado. */
const $cuadrado2 = document.getElementById("cuadrado2");
const $btn2 = document.getElementById("btn2");
const $textoIngresado = document.getElementById("textoIngresado");

$textoIngresado.addEventListener("input", () => {
  const texto = $textoIngresado.value;
  $cuadrado2.textContent = texto;
});

$btn2.addEventListener("click", () => {
  $cuadrado2.textContent = "";
  $textoIngresado.value = "";
});



/* 3° - Crear una aplicación que calcule el índice de masa corporal, al presionar el
botón “calcular” deberá mostrar el resultado en el input correspondiente. */
let resultado = document.querySelector("#resultado")
let peso = document.querySelector("#peso")
let altura = document.querySelector("#altura")
let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let resultado1 = 0
    resultado.innerHTML+=resultado1
    return resultado.value = peso.value / (altura.value * 2)
})


/* 4° - Crear una aplicación de conversión de divisa. Deberá tener los valores por
defecto, por ejemplo 1 dólar = 500 pesos ( valor de ejemplo ), y al hacer algún cambio
en alguno de los inputs se deberá ver reflejado su correspondiente valor en la
moneda a convertir. */

let dolar = document.querySelector("#dolar")
let monedaLocal = document.querySelector("#pesos")
let divisa = document.querySelector("#divisa")

divisa.addEventListener("submit",(e)=>{
    e.preventDefault()
    let pesos = 590
    let resultado2 = 0
    monedaLocal.innerHTML+=resultado2
    return monedaLocal.value = dolar.value * pesos
})

/* 5-  Generar una función que reciba como 
parámetro un array de cervezas y un id. La 
función debe renderizar (renderear, dibujar, 
pintar, llenar, etc) en un  archivo html 
una tabla que contenga las columnas 
"Name", "ABV", "IBU", y una fila por cada 
elemento del array. Cada fila debe tener 
los datos que se piden  de cada una de las 
cervezas. */

let body = document.getElementById('tbody')
function renderizar ( cervezas, id ){
    const cerveza = cervezas.find( cervezaActual => cervezaActual.id === id )
    body.innerHTML += `<tr>
    <td>${cerveza.name}</td>
    <td>${cerveza.abv}</td>
    <td>${cerveza.ibu}</td>
</tr>`
}

renderizar ( beers, 7 )