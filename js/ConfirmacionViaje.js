let ConfirmacionViaje
function ConfirmacionViaje(){
    

}

function personajes_seleccion(event){
    personajeSeleccionado = event.target.id;
    localStorage.setItem('personajeSeleccionado', personajeSeleccionado);
    console.log(localStorage.getItem('personajeSeleccionado'));
    location.href = "niveles.html"
}