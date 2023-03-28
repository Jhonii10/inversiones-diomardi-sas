
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


