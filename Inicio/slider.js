const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// Función para mostrar la slide actual
function showSlide(slideIndex) {
  // Resetear todas las slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // Mostrar la slide actual
  slides[slideIndex].style.display = 'block';
}

// Función para actualizar los botones de los dots
function updateDots(dotIndex) {
  // Resetear todos los dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  // Añadir la clase active al dot actual
  dots[dotIndex].classList.add('active');
}

// Función para avanzar a la siguiente slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  updateDots(currentSlide);
}

// Función para retroceder a la slide anterior
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
    currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
    updateDots(currentSlide);
    }
    
    // Función para cambiar a una slide específica
    function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    showSlide(currentSlide);
    updateDots(currentSlide);
    }
    
    // Event listeners para los botones de siguiente y anterior
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
    
    // Event listener para los dots
    dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
    goToSlide(index);
    });
    });
    
    // Mostrar la primera slide al cargar la página
    showSlide(currentSlide);
    updateDots(currentSlide);
    
    // Función para cambiar automáticamente las slides cada 5 segundos
    function autoSlide() {
    nextSlide();
    }
    
    setInterval(autoSlide, 5000);