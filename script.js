

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .6s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}



/**
 * Despliega el menu en laptos 
 */

 const menuEmail = document.querySelector('.navbar-email');
 const desktopMenu = document.querySelector('.desktop-menu');
 const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
 menuEmail.addEventListener('click', toggleDesktopMenu);

 function toggleDesktopMenu()
 {
   const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
 
   if (!isAsideClosed) 
   {
     shoppingCartContainer.classList.add('inactive');
   }
   
   desktopMenu.classList.toggle('inactive');
 
 }
 

