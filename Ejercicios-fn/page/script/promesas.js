
let $sectionCartas = document.getElementById('sectionCartas')
fetch(' https://apisimpsons.fly.dev/api/personajes')
.then(res => res.json())
.then(res =>{
    console.log(res);
    const arrayPersonajes = res.docs
    console.log(arrayPersonajes);
    console.log(mostrarNombres(arrayPersonajes));
    pintarTarjeta(arrayPersonajes, $sectionCartas)
}). catch(err=> console.log(err))

function mostrarNombres(array){
    return array.map(personaje => personaje.Nombre)
}


/*-------------------------------------------*/
fetch('https://www.moogleapi.com/api/v1/characters')
.then(res=> res.json())
.then(res=>{
    const array = res
    console.log(array);
    console.log(mostrarNombre(array));
})


/*-------------------------------------------*/

fetch('https://rickandmortyapi.com/api/character/12')
.then(res=> res.json())
.then(res=>{
    let respuesta=res
    console.log(respuesta);
    console.log(mostrarNombreDos(respuesta));
})
.catch(err=> console.log(err))


function mostrarNombreDos(objeto){
   let array = Object.values(objeto)
   console.log(array);
   let set = new Set (array.map(personaje => personaje.name) )
   console.log(set);
    return set
}
/*--------------FUNCIONES-----------------------------*/
function crearTarjeta (personaje){
    return`<div class="card " style="width: 18rem;">
    <img src="${personaje.Imagen}" class="card-img-top  " alt="Image-card">
    <div class="card-body">
      <h3>${personaje.Nombre}</h3>
      <p>Ocupacion: </p>
      <p>${personaje.Ocupacion}</p>
    </div>
    <div class="d-flex justify-content-around align-items-center pb-3">
      <h4>${personaje.Genero}</h4>
    </div>
  </div>
    `
}
function pintarTarjeta (array, lugar){
    for (const personaje of array) {
        let templete = crearTarjeta(personaje)
        lugar.innerHTML += templete        
    }
}
