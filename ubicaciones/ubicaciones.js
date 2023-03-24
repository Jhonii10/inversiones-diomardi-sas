const menuMobile = document.querySelector(".menu-mobile");
const botonMenu = document.querySelector(".boton-menu");
const header = document.querySelector("#header");
const botonExit = document.querySelector(".exit");
const conoceUnaTienda = document.querySelector(".div-conoce-una-tienda")
const titulosUbicaciones = document.querySelector("#titulo-ubicaciones")
const mainContainer = document.querySelector(".main-container")
const textoopcional = document.querySelector("#text-opcional")
const logoCompleto = document.querySelector("#logo-completo")
const redessociales = document.querySelector("#redes-sociales")


botonMenu.addEventListener("click", desplegarMenuMobile);


function desplegarMenuMobile()
{
    menuMobile.style.display = "block";
    header.style.display = "none";
    conoceUnaTienda.style.display = "none";
    titulosUbicaciones.style.display = "none";
    mainContainer.style.display = "none";
    logoCompleto.style.display = "none";
    textoopcional.style.display = "none";
    redessociales.style.display = "none";

    console.log("esta funcionando")
}


botonExit.addEventListener("click", regresarPaginaDeInicio)


function regresarPaginaDeInicio(params)
{
    menuMobile.style.display = "none";
    header.style.display = "inline-flex";
    conoceUnaTienda.style.display = "grid";
    titulosUbicaciones.style.display = "flex";
    mainContainer.style.display = "block";
    logoCompleto.style.display = "block";
    textoopcional.style.display = "block";
    redessociales.style.display = "flex";

    console.log("esta funcionando")
}





const detalles = document.querySelectorAll('[class^="detalles-"]');
const botones = document.querySelectorAll('button[id^="boton-"]');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const detalle = document.querySelector(`.detalles-${boton.id.split('-')[1]}`);
    if (detalle.style.display === 'none') {
      detalle.style.display = 'block';
      boton.innerHTML = 'Menos detalles';
    } else {
      detalle.style.display = 'none';
      boton.innerHTML = 'Mas detalles';
    }
  });
});