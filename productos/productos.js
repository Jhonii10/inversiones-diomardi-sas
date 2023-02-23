

const menuMobile = document.querySelector(".menu-mobile");
const botonMenu = document.querySelector(".boton-menu");
const header = document.querySelector("#header");
const botonExit = document.querySelector(".exit");
const textoTitulo = document.querySelector("#texto-principal");
const mainContainer = document.querySelector(".main-container")
const textoOpcional = document.querySelector("#text-opcional") 
const redesSociales = document.querySelector("#redes-sociales")
const logoCompleto = document.querySelector("#logo-completo")


botonMenu.addEventListener("click", desplegarMenuMovile)


function desplegarMenuMovile()
{
    menuMobile.style.display = "block";
    header.style.display = "none";
    textoTitulo.style.display = "none";
    mainContainer.style.display = "none";
    textoOpcional.style.display = "none";
    redesSociales.style.display = "none";
    logoCompleto.style.display = "none";


    console.log("esta funcionando")
}


botonExit.addEventListener("click", regresarPaginaDeInicio)


function regresarPaginaDeInicio(params)
{
    menuMobile.style.display = "none";
    header.style.display = "flex";
    textoTitulo.style.display = "block";
    mainContainer.style.display = "block";
    textoOpcional.style.display = "block";
    redesSociales.style.display = "flex";
    logoCompleto.style.display = "block";
    console.log("esta funcionando")
}


