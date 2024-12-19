document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper-3d", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3, // Mostrar tres imágenes al mismo tiempo
        loop: true,
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            // Para dispositivos pequeños (361px a 508px)
            361: {
                slidesPerView: 2, // Mostrar 2 imágenes en dispositivos más pequeños
            },
            // Para pantallas más grandes
            768: {
                slidesPerView: 3, // Mostrar 3 imágenes en pantallas medianas
            },
            // Para pantallas grandes
            1024: {
                slidesPerView: 4, // Mostrar 4 imágenes en pantallas grandes
            },
        },
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
