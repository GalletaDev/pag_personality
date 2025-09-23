const grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺", "👿", "🤢", "💀", "👀"];
const totalTarjetas = [...grupoTarjetas, ...grupoTarjetas];

const barajaTarjetas = () => {
    return totalTarjetas.sort(() => Math.random() - 0.7);
};

const aciertoEmoji = document.createElement("span");

aciertoEmoji.textContent = "✔️";

const reparteTarjetas = () => {
    const mesa = document.querySelector("#mesa");
    mesa.innerHTML = "";
    const tarjetasBarajadas = barajaTarjetas();

    tarjetasBarajadas.forEach(emoji => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta";
        tarjeta.innerHTML = `<div class="tarjeta_contenido">${emoji}</div>`;
        mesa.appendChild(tarjeta);

        tarjeta.addEventListener("click", () => {
            if (tarjeta.classList.contains("volteada") || tarjetasVolteadas.length >= 2) return;

            tarjeta.classList.add("volteada");
            tarjetasVolteadas.push(tarjeta);

            if (tarjetasVolteadas.length === 2) {
                // No son iguales → animación de error
                const [primera, segunda] = tarjetasVolteadas;
                const emoji1 = primera.querySelector(".tarjeta_contenido").textContent;
                const emoji2 = segunda.querySelector(".tarjeta_contenido").textContent;

                if (emoji1 !== emoji2) {
                    // efecto de error de carta acierto .css
                    primera.classList.add("tarjeta--error");
                    segunda.classList.add("tarjeta--error");

                    setTimeout(() => {
                        // Quita la clase de error y voltea las cartas de nuevo
                        primera.classList.remove("volteada", "tarjeta--error");
                        segunda.classList.remove("volteada", "tarjeta--error");
                        tarjetasVolteadas = [];
                    }, 900); // temporizador de cuanto tiempo para volver a voltear
                } else {
                    // efecto de acierto con las cartas .css
                    primera.classList.add("tarjeta--acierto");
                    segunda.classList.add("tarjeta--acierto");

                    // setTimeout(() => {
                    //     // Quita la clase de error y voltea las cartas de nuevo
                    //     primera.classList.add("aciertoEmoji");
                    //     segunda.classList.add("aciertoEmoji");
                    // }, 800);

                    // Son iguales → dejarlas volteadas
                    tarjetasVolteadas = [];

                    // Verificar si todas están emparejadas
                    const todasVolteadas = document.querySelectorAll(".tarjeta.volteada").length;
                    const total = totalTarjetas.length;

                    // Resultados finales
                    if (todasVolteadas === total) {
                        document.getElementById("mensaje").textContent = "🎉 ¡Felicidades! Completaste el juego.";
                    }
                }
            }
        });
    });
};

let tarjetasVolteadas = [];
reparteTarjetas();



// if (emoji1 !== emoji2) {
//   // Agrega clase de error
//     primera.classList.add("tarjeta--error");
//     segunda.classList.add("tarjeta--error");

//     setTimeout(() => {
//         // Quita la clase de error y voltea las cartas de nuevo
//         primera.classList.remove("volteada", "tarjeta--error");
//         segunda.classList.remove("volteada", "tarjeta--error");
//         tarjetasVolteadas = [];
//     }, 1000);
//     } else {
//   tarjetasVolteadas = [];
//     }