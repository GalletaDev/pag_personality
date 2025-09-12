const toggleButton = document.getElementById('toggleButton');
const ReturnButton = document.getElementById('ReturnButton')
const miSection = document.getElementById('miSection');

// Función que sincroniza visibilidad según el tamaño de pantalla
function sincronizarVisibilidad() {
    if (window.innerWidth <= 1090) {
        // En móvil, ocultamos sección si no está visible y mostramos el botón
        if (!miSection.style.display || miSection.style.display === 'flex') {
            miSection.style.display = 'none';
        }
        toggleButton.style.display = 'flex';
        ReturnButton.style.left = '75%';
        console.log({ReturnButton}, {toggleButton}, 'Cambio a default')
    } else {
        // En escritorio, siempre mostramos la sección y ocultamos el botón
        miSection.style.display = 'flex';
        toggleButton.style.display = 'none';
        ReturnButton.style.left = '90%';
        console.log({ReturnButton}, {toggleButton}, 'Cambio a navegador menu')
    }
}

// Al cargar la página
sincronizarVisibilidad();

// Cada vez que cambia el tamaño de ventana
window.addEventListener('resize', sincronizarVisibilidad);

// Evento para el botón mostrar/ocultar en móvil
toggleButton.addEventListener('click', () => {
    if (miSection.style.display === 'none') {
        miSection.style.display = 'flex';
        ReturnButton.style.left = '120%';
        console.log({miSection}, {ReturnButton}, 'click action toggleButton on')
    } else {
        miSection.style.display = 'none';
        ReturnButton.style.left = '75%';
        console.log({miSection}, 'click action toggleButton off')
    }
});

