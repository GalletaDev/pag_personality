function aceptarCookies() {
    sessionStorage.setItem("cookiesAceptadas", "true");
    document.getElementById("cookie-banner").style.display = "none";

    // Activar iframes embebidos (Bandcamp, YouTube, etc.)
    const iframes = document.querySelectorAll('iframe[data-src]');
    iframes.forEach(el => {
        el.setAttribute('src', el.getAttribute('data-src'));
    });
}

window.onload = function () {
    if (sessionStorage.getItem("cookiesAceptadas") !== "true") {
        document.getElementById("cookie-banner").style.display = "block";
    } else {
        // Ya aceptó → cargar directamente los iframes
        const iframes = document.querySelectorAll('iframe[data-src]');
        iframes.forEach(el => {
            el.setAttribute('src', el.getAttribute('data-src'));
        });
    }
};