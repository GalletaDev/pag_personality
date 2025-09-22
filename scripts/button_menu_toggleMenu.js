function toggleMenu() {
    const menu = document.getElementById('menuList');

    // Solo alternar si estamos en móvil
    if (window.innerWidth <= 1090) {
        menu.classList.toggle('collapsed');
        menu.classList.toggle('expanded');
    }
}