const toggleButton = document.getElementById('toggleButton');
const miSection = document.getElementById('miSection');

// Función que sincroniza visibilidad según el tamaño de pantalla
function sincronizarVisibilidad() {
    if (window.innerWidth <= 1090) {
        // En móvil, ocultamos sección si no está visible y mostramos el botón
        if (!miSection.style.display || miSection.style.display === 'flex') {
            miSection.style.display = 'none';
        }
        toggleButton.style.display = 'flex';
    } else {
        // En escritorio, siempre mostramos la sección y ocultamos el botón
        miSection.style.display = 'flex';
        toggleButton.style.display = 'none';
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
    } else {
        miSection.style.display = 'none';
    }
});