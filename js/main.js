window.onload = init;

function init(){
    let path = window.location.pathname;
    let file = path.substring(path.lastIndexOf('/'));
    console.log(file);
    switch (file) {
        case "/index.html", "/":
            index();
            break;
        case "/creditos.html":
            creditos();
            break;
        case "/personajes.html":
            personajes();
            break;
        case "/puntuacion.html":
            puntuacion();
            break;
        case "/login.html":
            login();
            break;
        case "/niveles.html":
            niveles();
            break;     
        default:
            break;
    }
}