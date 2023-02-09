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