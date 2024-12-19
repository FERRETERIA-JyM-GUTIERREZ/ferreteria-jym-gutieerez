// Función para abrir el modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

// Función para cerrar el modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

document.addEventListener('DOMContentLoaded', function () {
    const loadingContainer = document.querySelector('.loading-container');
    const message = document.getElementById('message');

    // Mostrar la animación de carga por 3 segundos
    setTimeout(() => {
        loadingContainer.style.display = 'none';
        message.style.display = 'flex';
        setTimeout(() => {
            message.classList.add('show');
        }, 10);
        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => {
                message.style.display = 'none';
            }, 500);
        }, 3000);
    }, 3000);
});


// imput de busqueda de productos 
document.addEventListener("DOMContentLoaded", function () {
    // Captura del input y contenedor de productos
    const searchInput = document.getElementById("searchInput");
    const productContainer = document.getElementById("productContainer");
    const products = document.querySelectorAll(".product-item");

    // Evento al escribir en el input
    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toUpperCase();

        products.forEach((product) => {
            const productName = product.querySelector("h3").textContent.toUpperCase();
            const productCode = product.querySelector("img").alt.toUpperCase(); // Código de producto en alt

            // Mostrar u ocultar producto basado en la búsqueda
            if (productName.includes(filter) || productCode.includes(filter)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const searchValue = urlParams.get("search");

    const searchInput = document.getElementById("searchInput");
    const products = document.querySelectorAll(".product-item");

    if (searchValue) {
        searchInput.value = searchValue; // Inserta el valor de búsqueda en el input

        // Aplica el filtro automático
        const filter = searchValue.toUpperCase();
        products.forEach((product) => {
            const productName = product.querySelector("h3").textContent.toUpperCase();
            const productCode = product.querySelector("img").alt.toUpperCase();

            if (productName.includes(filter) || productCode.includes(filter)) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }
        });

        // Desplázate automáticamente a la sección de productos
        document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
    }
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
