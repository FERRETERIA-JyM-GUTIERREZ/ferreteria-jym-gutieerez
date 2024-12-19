// Configuración del SwiperJS para el carrusel
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",            // Efecto 3D tipo "coverflow"
    grabCursor: true,               // Cambia el cursor a "manito"
    centeredSlides: true,           // Centra la imagen principal
    slidesPerView: '5',               // Número de imágenes visibles
    spaceBetween: 20,               // Espacio entre imágenes
    coverflowEffect: {
        rotate: 0,                  // Sin rotación de imágenes
        stretch: 0,                 // Espaciado dinámico
        depth: 150,                 // Profundidad del efecto 3D
        modifier: 1.2,              // Modifica la escala del efecto
        slideShadows: true,         // Sombras en las imágenes
    },
    loop: true,                     // Reproducción infinita
    autoplay: {
        delay: 3000,                // Cambio automático cada 3 segundos
        disableOnInteraction: false, // Continúa después de interacción
    },
    pagination: {
        el: ".swiper-pagination",   // Selector de la paginación
        clickable: true,            // Permite hacer clic en la paginación
    },
    navigation: {
        nextEl: ".swiper-button-next", // Botón siguiente
        prevEl: ".swiper-button-prev", // Botón anterior
    },
});

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Animación de la tarjeta de información usando GSAP
    gsap.from(".business-card", {
        opacity: 0,
        y: 50,                      // Desplazamiento inicial hacia abajo
        duration: 1.5,              // Duración de la animación
        ease: "power2.out",         // Efecto de suavizado
    });

    // Animación del título de la tarjeta
    gsap.from(".business-title", {
        opacity: 0,
        scale: 0.8,                 // Inicialmente más pequeño
        duration: 1,                // Duración de la animación
        delay: 0.5,                 // Retardo antes de iniciar
        ease: "elastic.out(1, 0.5)" // Efecto elástico suave
    });

    // Animación de los párrafos dentro de la tarjeta
    gsap.from(".business-card p", {
        opacity: 0,
        x: -30,                     // Desplazamiento desde la izquierda
        duration: 1,                // Duración de la animación
        delay: 0.7,                 // Retardo inicial
        stagger: 0.3,               // Intervalo entre cada párrafo
        ease: "power2.out",         // Efecto de suavizado
    });
});

// Función para redirigir a la sección de productos
document.addEventListener("DOMContentLoaded", () => {
    const searchInputs = document.querySelectorAll("input[type='text']"); // Selecciona todos los inputs

    searchInputs.forEach(input => {
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") { 
                const searchValue = input.value.trim(); // Captura el texto del input
                
                if (searchValue) {
                    // Redirige a productos.html con el parámetro de búsqueda
                    window.location.href = `productos.html?search=${encodeURIComponent(searchValue)}`;
                }
            }
        });
    });
});





// Función para crear un copo de nieve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    // Alternar entre diferentes caracteres
    snowflake.textContent = Math.random() > 0.5 ? '❅' : '❆';
    
    // Posición aleatoria
    snowflake.style.left = Math.random() * 100 + '%';
    
    // Tamaño aleatorio
    snowflake.style.fontSize = Math.random() * (1.5 - 0.5) + 0.5 + 'em';
    
    // Duración aleatoria
    snowflake.style.animationDuration = Math.random() * (15 - 5) + 5 + 's';
    
    // Retraso aleatorio
    snowflake.style.animationDelay = '-' + Math.random() * 15 + 's';
    
    // Color aleatorio (opcional)
    const colors = ['#FFF', '#FFFAF0', '#F0FFF0', '#F0F8FF', '#E6E6FA'];
    snowflake.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    // Añadir al contenedor
    document.querySelector('.snowflakes').appendChild(snowflake);
}

// Crear múltiples copos de nieve
const snowflakeCount = 100; // Número de copos
for (let i = 0; i < snowflakeCount; i++) {
    createSnowflake();
}
//======================================================
// FUNCION PARA DESAPARECER LSO COPOS DE VIEVE Y EL MENSAJE DE BIENBENIDA
//======================================================



// Función para verificar si la fecha actual está dentro del rango
function isWithinHolidayPeriod() {
    const today = new Date();
    const year = today.getFullYear();

    // Definir las fechas de inicio y fin del periodo
    const startDate = new Date(`December 1, ${year}`);
    const endDate = new Date(`January 30, ${year + 1}`);

    // Si el mes actual es enero, ajustamos el año de inicio
    if (today.getMonth() === 0) { // Enero es 0
        startDate.setFullYear(year - 1);
    }

    return today >= startDate && today <= endDate;
}

// Función para mostrar u ocultar los elementos
function toggleHolidayElements() {
    const showElements = isWithinHolidayPeriod();

    const snowflakes = document.querySelector('.snowflakes');
    const floatingMessage = document.querySelector('.floating-message');

    if (showElements) {
        snowflakes.classList.remove('hidden');
        floatingMessage.classList.remove('hidden');
    } else {
        snowflakes.classList.add('hidden');
        floatingMessage.classList.add('hidden');
    }
}

// Ejecutar la función al cargar la página
window.addEventListener('DOMContentLoaded', toggleHolidayElements);
