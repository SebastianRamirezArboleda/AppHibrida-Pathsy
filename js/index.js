let boton_jugar;
let boton_creditos;
let boton_puntuacion;
function index(){
    boton_jugar = document.getElementById("index_btn_jugar");
    boton_creditos = document.getElementById("index_btn_creditos");
    
    boton_jugar.addEventListener("click",nav_jugar);
    boton_creditos.addEventListener("click",nav_creditos);
}
function nav_jugar(){
    location.href = "login.html";
}
function nav_creditos(){
    location.href = "creditos.html";
}
