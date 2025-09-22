const container = document.getElementById("gallery-container");

// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const close = document.getElementById("close");
close.onclick = () => modal.style.display = "none";

// Carga las imágenes desde JSON
fetch("../../application/json/image_gallery.json")
    .then(res => res.json())
    .then(images => {
        images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.classList.add("gallery-item");
            container.appendChild(img);

            // Click para abrir modal
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = src;
                caption.textContent = src.split("/").pop();
            });
        });
    })
    .catch(err => console.error("Error cargando JSON:", err));