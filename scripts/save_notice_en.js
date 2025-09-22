fetch('../../application/json/notice_data_en.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('notices');
        const indiceNotice = document.getElementById('indiceNotice');
        const miSection = document.getElementById('miSection'); // Asegúrate que es el ID correcto
        const ReturnButton = document.getElementById('ReturnButton')

        data.forEach((notice, index) => {
            const id = 'notice-' + index; // ID for each notice

            // Create index item
            const itemIndice = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = `${notice.title} (${notice.day})`;
            link.classList.add('button_decoration_list');

            // Añadimos el event listener para ocultar la sección al tocar
            link.addEventListener('click', () => {
                // Oculta la sección cuando se selecciona un enlace
                if(window.innerWidth <= 1090) { // Solo en móvil
                    miSection.style.display = 'none';
                    ReturnButton.style.left = '75%';
                    // document.body.style.overflow = 'auto'; 
                }
            });

            itemIndice.appendChild(link);
            indiceNotice.appendChild(itemIndice);

            // Create notice entry
            const entry = document.createElement('div');
            entry.id = id;
            
            const paragraphs = notice.info.map(p => `<p>${p}</p>`).join('');
            entry.innerHTML = `
                <h2>${notice.title} <span class="class_js_use">(${notice.day})</span></h2>
                ${paragraphs}
            `;
            container.appendChild(entry);
        });
    })
    .catch(err => {
        document.getElementById('notices').innerHTML = "<p>Error loading notices.</p>";
        console.error(err);
    });


