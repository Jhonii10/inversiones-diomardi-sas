popupWhatsApp = () => {
  
  // Seleccionamos los elementos del DOM que vamos a utilizar
  let btnClosePopup = document.querySelector('.closePopup');
  let btnOpenPopup = document.querySelector('.whatsapp-button');
  let popup = document.querySelector('.popup-whatsapp');
  let sendBtn = document.getElementById('send-btn');

  // Agregamos un escuchador de eventos al botón de cerrar la ventana emergente
  btnClosePopup.addEventListener("click",  () => {
    popup.classList.toggle('is-active-whatsapp-popup')
  })
  
  // Agregamos un escuchador de eventos al botón de abrir la ventana emergente
  btnOpenPopup.addEventListener("click",  () => {
    popup.classList.toggle('is-active-whatsapp-popup')
    popup.style.animation = "fadeIn .6s 0.0s both";
  })
  
  // Agregamos un escuchador de eventos al botón de enviar mensaje
  sendBtn.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g,"%20");   
    window.open('https://wa.me/573135667699?text='+relmsg, '_blank'); 
  });

  // Verificamos la resolución de la pantalla y mostramos la ventana emergente automáticamente después de 5 segundos si cumple con la condición
  if(screen.height >= 750 && screen.width > 450){
      setTimeout(() => {
          popup.classList.toggle('is-active-whatsapp-popup');
        }, 5000);
  }
}

// Llamamos a la función popupWhatsApp()
popupWhatsApp();
  