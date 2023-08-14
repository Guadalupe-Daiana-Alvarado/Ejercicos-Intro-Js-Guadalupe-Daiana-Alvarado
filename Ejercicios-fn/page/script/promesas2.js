
/*-------------------------------------------*/

let $sectionCartas = document.getElementById('sectionCartas')
fetch('https://hp-api.onrender.com/api/characters')
.then(res=> res.json())
.then(data=>{
    console.log(data);
    const arrayPersonajesHarry = data
    console.log(arrayPersonajesHarry);
    console.log(mostrarNombre(arrayPersonajesHarry));
    pintarTarjeta(arrayPersonajesHarry, $sectionCartas)
})
.catch(err=> console.log(err))
 /*--------------FUNCIONES-----------------------------*/
function mostrarNombre(array){
    return array.map(personaje => personaje.name)
}

function mostrarNombreDos(objeto){
    let array = Object.values(objeto)
    console.log(array);
    let set = new Set (array.map(personaje => personaje.name) )
    console.log(set);
     return set
 }

 function crearTarjeta (personaje){
     return`<div class="card " style="width: 18rem;">
     <img src="../img/ops.png" class="card-img-top  " alt="Image-card">
     <div class="card-body">
       <h3>${personaje.name}</h3>
       <p>Ocupacion: </p>
       <p>${personaje.house}</p>
     </div>
     <div class="d-flex justify-content-around align-items-center pb-3">
       <h4>${personaje.actor}</h4>
       <h4>${personaje.dateOfBirth}</h4>
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
 