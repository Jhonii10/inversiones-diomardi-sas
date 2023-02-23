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



const botonPasarela = document.querySelector(".boton-1")
const botonCosmocentro = document.querySelector(".boton-2");
const botonValledelili = document.querySelector(".boton-3");
const botonMercar = document.querySelector(".boton-4");
const botonCosmobelleza = document.querySelector(".boton-5");
const botonUnicentro = document.querySelector(".boton-6");
const botonChipichape = document.querySelector(".boton-7");
const botonCosmoelsi = document.querySelector(".boton-8");
const botonAlmavnsexta = document.querySelector(".boton-9");
const botonCalimanuevo = document.querySelector(".boton-10");
const botonSaladeventas = document.querySelector(".boton-11");
const botonBodegaprincipal = document.querySelector(".boton-12");




const detallesPasarela = document.querySelector(".detalles-pasarela")
const detallescosmocentro = document.querySelector(".detalles-cosmocentro")
const detallesValledelili = document.querySelector(".detalles-valledelili");
const detallesMercar = document.querySelector(".detalles-mercar");
const detallesCosmoBelleza = document.querySelector(".detalles-cosmobelleza");
const detallesUnicentro = document.querySelector(".detalles-unicentro");
const detallesChipichape = document.querySelector(".detalles-chipichape");
const detallesCosmoelsi = document.querySelector(".detalles-cosmoelsi");
const detallesAlmacenavnsexta = document.querySelector(".detalles-almavnsexta");
const detallesCalimaNuevo = document.querySelector(".detalles-calimanuevo");
const detallesSaladeventas = document.querySelector(".detalles-saladeventas");
const detallesBodegaprincipal = document.querySelector(".detalles-bodegaprincipal");


var almacenes = {  detallesPasarela,detallescosmocentro,detallesValledelili,
    detallesMercar,detallesCosmoBelleza,detallesUnicentro,detallesChipichape,
    detallesCosmoelsi,detallesAlmacenavnsexta,detallesCalimaNuevo,detallesSaladeventas,
    detallesBodegaprincipal

}

botonPasarela.addEventListener("click",desplegarPasarela)
function desplegarPasarela()
{
    if (botonPasarela.innerHTML === "Mas detalles")
    {
        detallesPasarela.style.display = "block";
        botonPasarela.innerHTML = "Menos detalles";
        
    } 
    
    else if(botonPasarela.innerHTML === "Menos detalles")
    {
        detallesPasarela.style.display = "none";
        botonPasarela.innerHTML = "Mas detalles";
    }
 

}

botonCosmocentro.addEventListener("click",desplegarCosmocentro)
function desplegarCosmocentro()
{
    if (botonCosmocentro.innerHTML === "Mas detalles")
    {
        detallescosmocentro.style.display = "block";
        botonCosmocentro.innerHTML = "Menos detalles";
        
    } 
    
    else if(botonCosmocentro.innerHTML === "Menos detalles")
    {
        detallescosmocentro.style.display = "none";
        botonCosmocentro.innerHTML = "Mas detalles";
    }
 

}

botonValledelili.addEventListener("click",desplegarvalledelili)
function desplegarvalledelili()
{
    console.log("1")
    if (botonValledelili.innerHTML === "Mas detalles")
    {
        detallesValledelili.style.display = "block";
        botonValledelili.innerHTML = "Menos detalles";
        console.log("click")
        
    } 
    
    else if(botonValledelili.innerHTML === "Menos detalles")
    {
        detallesValledelili.style.display = "none";
        botonValledelili.innerHTML = "Mas detalles";
    }
 

}

botonMercar.addEventListener("click",desplegarmercar)
function desplegarmercar()
{
    console.log("1")
    if (botonMercar.innerHTML === "Mas detalles")
    {
        detallesMercar.style.display = "block";
        botonMercar.innerHTML = "Menos detalles";
        console.log("click")
        
    } 
    
    else if(botonMercar.innerHTML === "Menos detalles")
    {
        detallesMercar.style.display = "none";
        botonMercar.innerHTML = "Mas detalles";
    }
 

}

botonCosmobelleza.addEventListener("click",desplegarcosmmobelleza)
function desplegarcosmmobelleza()
{
    console.log("1")
    if (botonCosmobelleza.innerHTML === "Mas detalles")
    {
        detallesCosmoBelleza.style.display = "block";
        botonCosmobelleza.innerHTML = "Menos detalles";
        console.log("click")
        
    } 
    
    else if(botonCosmobelleza.innerHTML === "Menos detalles")
    {
        detallesCosmoBelleza.style.display = "none";
        botonCosmobelleza.innerHTML = "Mas detalles";
    }
 

}


botonUnicentro.addEventListener("click",desplegarunicentro)
function desplegarunicentro()
{
    console.log("1")
    if (botonUnicentro.innerHTML === "Mas detalles")
    {
        detallesUnicentro.style.display = "block";
        botonUnicentro.innerHTML = "Menos detalles";
        console.log("click")
        
    } 
    
    else if(botonUnicentro.innerHTML === "Menos detalles")
    {
        detallesUnicentro.style.display = "none";
        botonUnicentro.innerHTML = "Mas detalles";
    }
 

}

botonChipichape.addEventListener("click",desplegarchipichape)
function desplegarchipichape()
{
    console.log("1")
    if (botonChipichape.innerHTML === "Mas detalles")
    {
        detallesChipichape.style.display = "block";
        botonChipichape.innerHTML = "Menos detalles";
        console.log("click")
        
    } 
    
    else if(botonChipichape.innerHTML === "Menos detalles")
    {
        detallesChipichape.style.display = "none";
        botonChipichape.innerHTML = "Mas detalles";
    }
 

}

botonCosmoelsi.addEventListener("click",desplegarcosmoelsi)
function desplegarcosmoelsi()
{
    console.log("1")
    if (botonCosmoelsi.innerHTML === "Mas detalles")
    {
        detallesCosmoelsi.style.display = "block";
        botonCosmoelsi.innerHTML = "Menos detalles";
        console.log("click")
        
    } 
    
    else if(botonCosmoelsi.innerHTML === "Menos detalles")
    {
        detallesCosmoelsi.style.display = "none";
        botonCosmoelsi.innerHTML = "Mas detalles";
    }
 

}




botonCalimanuevo.addEventListener("click",desplegarcalimanuevo)
function desplegarcalimanuevo()
{
    console.log("1")
    if (botonCalimanuevo.innerHTML === "Mas detalles")
    {
        detallesCalimaNuevo.style.display = "block";
        botonCalimanuevo.innerHTML = "Menos detalles";
        console.log("click")
        
    } 
    
    else if(botonCalimanuevo.innerHTML === "Menos detalles")
    {
        detallesCalimaNuevo.style.display = "none";
        botonCalimanuevo.innerHTML = "Mas detalles";
    }
 

}

botonSaladeventas.addEventListener("click",desplagarsala)
function desplagarsala()
{
    console.log("1")
    if (botonSaladeventas.innerHTML === "Mas detalles")
    {
        detallesSaladeventas.style.display = "block";
        botonSaladeventas.innerHTML = "Menos detalles";
        console.log("click")
        
    } 
    
    else if(botonSaladeventas.innerHTML === "Menos detalles")
    {
        detallesSaladeventas.style.display = "none";
        botonSaladeventas.innerHTML = "Mas detalles";
    }
 

}

botonBodegaprincipal.addEventListener("click",desplegarbodega)
function desplegarbodega()
{
    console.log("1")
    if (botonBodegaprincipal.innerHTML === "Mas detalles")
    {
        detallesBodegaprincipal.style.display = "block";
        botonBodegaprincipal.innerHTML = "Menos detalles";
        console.log("click")
        
    } 
    
    else if(botonBodegaprincipal.innerHTML === "Menos detalles")
    {
        detallesBodegaprincipal.style.display = "none";
        botonBodegaprincipal.innerHTML = "Mas detalles";
    }
 

}

