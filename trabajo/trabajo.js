const menuMobile = document.querySelector(".menu-mobile");
const botonMenu = document.querySelector(".boton-menu");
const header = document.querySelector("#header");
const botonExit = document.querySelector(".exit");
const firstContainer = document.querySelector(".first-container");
const twoContainer = document.querySelector(".two-container")
const pieDePagina = document.querySelector(".pie-de-pagina")


botonMenu.addEventListener("click", desplegarMenuMovile)


function desplegarMenuMovile()
{
    menuMobile.style.display = "block";
    header.style.display = "none";
    firstContainer.style.display = "none";
    twoContainer.style.display = "none";
    pieDePagina.style.display = "none";


}


botonExit.addEventListener("click", regresarPaginaDeInicio)


function regresarPaginaDeInicio(params)
{
    menuMobile.style.display = "none";
    header.style.display = "flex"
    firstContainer.style.display = "block";
    twoContainer.style.display = "block";
    pieDePagina.style.display = "flex";
    
}


const nav = document.querySelector('#header')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight ) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}