const menuMobile = document.querySelector(".menu-mobile");
const botonMenu = document.querySelector(".boton-menu");
const header = document.querySelector("#header");
const botonExit = document.querySelector(".exit");
const contenido = document.querySelector(".contenido");
const contenidoInicio = document.querySelector("#contenido-inicio")
const redesSociales = document.querySelector("#redes-sociales")
const logoCompleto = document.querySelector("#logo-completo")
const pieDePagina = document.querySelector("#pie-de-pagina")
const tituloPaginaProductos = document.querySelector("#texto-principal")

botonMenu.addEventListener("click", desplegarMenuMovile)


function desplegarMenuMovile()
{
    menuMobile.style.display = "block";
    header.style.display = "none";
    contenido.style.display = "none";
    contenidoInicio.style.display = "none";
    redesSociales.style.display = "none";
    logoCompleto.style.display = "none";
    pieDePagina.style.display = "none";


    console.log("esta funcionando")
}


botonExit.addEventListener("click", regresarPaginaDeInicio)


function regresarPaginaDeInicio(params)
{
    menuMobile.style.display = "none";
    header.style.display = "block"; 
    contenido.style.display = "flex";
    contenidoInicio.style.display = "block";
    redesSociales.style.display = "flex";
    logoCompleto.style.display = "block";
    pieDePagina.style.display = "flex";
    console.log("esta funcionando")
}