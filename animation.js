document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.gallery ul li');
    const images = document.querySelectorAll('.grid-wrapper .image');

    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            filterItems.forEach(li => li.classList.remove('active'));
            this.classList.add('active');

            images.forEach(image => {
                if (filter === '*' || image.classList.contains(filter.substring(1))) {
                    image.classList.add('show');
                } else {
                    image.classList.remove('show');
                }
            });
        });
    });

    // Exibe todas as imagens por padrão ao carregar a página
    const activeFilter = document.querySelector('.gallery ul li.active');
    if (activeFilter) {
        const filter = activeFilter.getAttribute('data-filter');
        images.forEach(image => {
            if (filter === '*' || image.classList.contains(filter.substring(1))) {
                image.classList.add('show');
            } else {
                image.classList.remove('show');
            }
        });
    }
});
