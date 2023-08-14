/*  1) Generar una función que reciba como parámetro un array de cervezas y devuelva un
nuevo array con las 10 cervezas más alcohólicas */
let data = beers
console.log(data);
function lasMasFuertes(data){
    const array = data.map(elementoActual => elementoActual)
    array.sort((a,b) => b.adv - a.adv)
    const lasDiezMasFuertes = array.slice(0,10)
    return lasDiezMasFuertes
}
let final = lasMasFuertes(data)
console.log(final);


/*  2)  Generar una función que reciba como parámetro el array de cervezas y un valor de
alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el
nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la
propiedades nombre, alcohol (abv) y "amargor" (ibu)  */

function lasDiezMasAmargas(data){
    const array = data.map(elementoActual => elementoActual)
    array.sort((a, b)=> a.ibu - b.ibu)
    const diezMenosAmargas = array.slice(1,11)
    return diezMenosAmargas
}
let diezFinalesMenosAmargas = lasDiezMasAmargas(data)
console.log(diezFinalesMenosAmargas);

/*  3) Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)
 */
function cervezaPorNivelEtilico (array, valor){
    const cervezasFiltradas = array.filter (array => array.abv <= valor)
    return cervezasFiltradas
}
let filtradaFinal = cervezaPorNivelEtilico(data, 5)
console.log(filtradaFinal);
let cervMapeadas = filtradaFinal.map(objeto =>{
    nombre: objeto.nombre
    alcohol: objeto.adv
    amargor: objeto.ibu
    return objeto
}
)
console.log(filtradaFinal);


/*   4) Generar una función que reciba como parámetro un array de cervezas, un nombre de
propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas
ordenadas por la propiedad ingresada como segundo argumento, de manera
ascendente si el tercero es true o descendente si es false. */

function arrayNombreValor (array, propiedad, valor){
    let arrayOrdenado = array.slice(0,10)
    if(valor === true){
        arrayOrdenado.sort((a,b)=> a[propiedad] - b[propiedad])

    }else if(valor === false){
        arrayOrdenado.sort((a,b) => b[propiedad] - a[propiedad])
    }
    return arrayOrdenado
}
console.log(arrayNombreValor(data, "adv", true));

/*    5) Generar una función que reciba como parámetro un array de cervezas y un id. La
función debe renderizar (renderizar, dibujar, pintar, llenar, etc) en un archivo html una
tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del
array. Cada fila debe tener los datos que se piden de cada una de las cervezas.
 */

let body = document.getElementById('tbody')
console.log(body);

function renderizarCerveza(cerveza) {
    return `<tr>
        <td>${cerveza.name}</td>
        <td>${cerveza.abv}</td>
        <td>${cerveza.ibu}</td>
    </tr>`;
}

function pintarTarjeta(array, lugar) {
    for (const cerveza of array) {
        let template = renderizarCerveza(cerveza);
        lugar.innerHTML += template;
    }
}
pintarTarjeta(data, body);
