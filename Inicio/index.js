// Selecion de elementos del DOM

const menuMobile = document.querySelector(".menu-mobile");
const botonMenu = document.querySelector(".boton-menu");
const header = document.querySelector("#header");
const header_div = document.querySelector(".header-div");
const botonExit = document.querySelector(".exit");
const dateTest = document.querySelector(".data-test")


// Muestra el menu movil
function mostrarMenuMovil()
{
    menuMobile.classList.remove("inactive")
    header.style.display = "none";
    header_div.style.display = "none";
    dateTest.style.display = "none";

}


// Oculta el menu movil
function ocultarMenuMovil()
{
    menuMobile.classList.add("inactive")
    header.style.display = "inline-flex"; 
    header_div.style.display = "flex";
    dateTest.style.display = "block";
    
}

// Escucha los eventos 
botonMenu.addEventListener("click", mostrarMenuMovil)
botonExit.addEventListener("click", ocultarMenuMovil)


const nav = document.querySelector('#header')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight ) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


 

