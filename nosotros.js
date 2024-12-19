document.addEventListener("DOMContentLoaded", () => {
    const smokeBackground = document.querySelector(".smoke-background");
    const bubbleCount = 50;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        const size = Math.random()*20+10;
        bubble.style.width=`${size}px`;
        bubble.style.height=`${size}px`;
        bubble.style.left=`${Math.random()*100}vw`;
        bubble.style.animationDelay=`${Math.random()*5}s`;
        bubble.style.animationDuration=`${Math.random()*10+5}s`;
        smokeBackground.appendChild(bubble);
    }
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
document.addEventListener("DOMContentLoaded", () => {
    // Generar burbujas de humo
    const smokeBackground = document.querySelector(".smoke-background");
    const bubbleCount = 50;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        const size = Math.random() * 20 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
        smokeBackground.appendChild(bubble);
    }

    // Función para redirigir a la sección de productos al presionar "Enter" en el campo de búsqueda
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

// Función para verificar si la fecha actual está dentro del rango
function isWithinHolidayPeriod() {
    const today = new Date();
    const year = today.getFullYear();

    // Definir las fechas de inicio y fin del periodo
    let startDate = new Date(`December 1, ${year}`);
    let endDate = new Date(`January 30, ${year + 1}`);

    // Si el mes actual es enero, ajustamos el año de inicio
    if (today.getMonth() === 0) { // Enero es 0
        startDate = new Date(`December 1, ${year - 1}`);
        endDate = new Date(`January 30, ${year}`);
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

