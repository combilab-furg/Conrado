document.querySelectorAll('.flowchart-item').forEach(item => {
    item.addEventListener('click', () => {
        // Verifica se o item já está aberto
        const isActive = item.classList.contains('active');

        // Fecha todos os itens
        document.querySelectorAll('.flowchart-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.info')?.remove(); // Remove a informação se existir
        });

        // Se o item clicado não estava aberto, abre ele
        if (!isActive) {
            item.classList.add('active');

            // Cria a informação adicional
            const info = document.createElement('div');
            info.classList.add('info');
            info.textContent = item.getAttribute('data-info'); // Usa o valor do data-info

            // Adiciona a informação ao item e exibe
            item.appendChild(info);
        }
    });
});