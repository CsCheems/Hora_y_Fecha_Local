const querystring = window.location.search;
const urlParameters = new URLSearchParams(querystring);

// Valores predeterminados
const fuenteLetra = urlParameters.get("fuenteLetra") || "Oswald";
const colorFuente = urlParameters.get("color") || "#ffffff";
const tamanoFuente = parseInt(urlParameters.get("tamanoFuente")) || 80;
const visualizacion = parseInt(urlParameters.get("visualizacion")) || 2;
const posicionamiento = parseInt(urlParameters.get("posicionamiento")) ||0;
const formato = obtenerBooleanos("formato", true);
const sombra = obtenerBooleanos("sombra", true);
const mostrarRelojFecha = parseInt(urlParameters.get("fechaHora")) || 0;


function setTime() {
    getTime(); // Llama inmediatamente una vez
    setInterval(getTime, 1000);
}

setTime();

function getTime() {
    const main = document.getElementById("main-container");
    if (!main) return;

    main.style.display = "flex";
    main.style.fontFamily = fuenteLetra;
    main.style.fontSize = `${tamanoFuente}px`;
    main.style.color = colorFuente;
    main.style.fontWeight = "700";
    main.style.width = "100%";
    main.style.height = "100vh"; // para centrar verticalmente

    // Reset styles para evitar acumulación de estilos en cada llamada
    main.style.justifyContent = "";
    main.style.alignItems = "";

    // Posicionamiento vertical
    switch (posicionamiento) {
        case 0:
            main.style.alignItems = "flex-start";
            break;
        case 1:
            main.style.alignItems = "center";
            main.style.justifyContent = "center";
            break;
        case 2:
            main.style.alignItems = "flex-end";
            break;
        default:
            console.warn("Valor de 'posicionamiento' no válido");
    }

    // Obtén o crea los divs
    let dateDiv = document.getElementById("dater");
    if (!dateDiv) {
        dateDiv = document.createElement("div");
        dateDiv.id = "dater";
        main.appendChild(dateDiv);
    }

    let timerDiv = document.getElementById("timer");
    if (!timerDiv) {
        timerDiv = document.createElement("div");
        timerDiv.id = "timer";
        main.appendChild(timerDiv);
    }

    // Visualización: dirección del flex y tamaños
    switch (visualizacion) {
        case 0: // Horizontal
            main.style.flexDirection = "row";
            timerDiv.style.marginLeft = "30px";
            break;
        case 1: // Vertical (hora arriba)
            main.style.flexDirection = "column";
            break;
        case 2: // Vertical (fecha arriba)
            main.style.flexDirection = "column-reverse";
            dateDiv.style.fontSize = "0.7em";
            dateDiv.style.fontWeight = "400";
            break;
        default:
            console.warn("Valor de 'visualizacion' no válido");
    }

    timerDiv.style.display = "block";
    dateDiv.style.display = "block";

    switch (mostrarRelojFecha) {
        case 1:
            timerDiv.style.display = "none";
            break;
        case 2:
            dateDiv.style.display = "none";
            break;
        case 0:
        default:
            break;
    }

    // Sombra
    main.style.textShadow = sombra ? "3px 3px 4px black" : "none";

    // Hora
    const now = new Date();
    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: formato,
    });

    // Fecha
    const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    const dia = now.getDate();
    const mes = meses[now.getMonth()];
    const anio = now.getFullYear();
    const formattedDate = `${dia} ${mes} ${anio}`.toUpperCase();

    // Asignar contenido
    timerDiv.innerHTML = formattedTime;
    dateDiv.innerHTML = formattedDate;
}

function obtenerBooleanos(parametro, valor){
    const urlParams = new URLSearchParams(window.location.search);

    console.log(urlParams);

    const valorParametro = urlParams.get(parametro);

    if(valorParametro === null){
        return valor;
    }

    if(valorParametro === 'true'){
        return true;
    }else if(valorParametro === 'false'){
        return false;
    }else{
        return valor;
    }
}