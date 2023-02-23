    const inicioDeSeccion = document.querySelector(".inicio-de-section");
    const crearCuenta = document.querySelector(".Registrarse");
    const botonRegistrarse = document.querySelector(".singup-button")
    const botonCrearcuenta = document.querySelector(".crear-cuenta");
    const flechita = document.querySelector(".flechita");



    botonRegistrarse.addEventListener("click",registrarse);

    function registrarse(params)
    {
        inicioDeSeccion.style.display = "none"
        crearCuenta.style.display = "grid"
        console.log("esta funcionando")

        
    }

    flechita.addEventListener("click",inicio);

    function inicio(params)
    {
        inicioDeSeccion.style.display = "grid"
        crearCuenta.style.display = "none"
        
    }


const menuMobile = document.querySelector(".menu-mobile");
const botonMenu = document.querySelector(".boton-menu");
const header = document.querySelector("#header");
const botonExit = document.querySelector(".exit");
const login = document.querySelector(".login")


botonMenu.addEventListener("click", desplegarMenuMovile)


function desplegarMenuMovile()
{
    menuMobile.style.display = "block";
    header.style.display = "none";
    login.style.display = "none";

}


botonExit.addEventListener("click", regresarPaginaDeInicio)


function regresarPaginaDeInicio(params)
{
    menuMobile.style.display = "none";
    header.style.display = "flex"; 
    login.style.display = "grid";
}

