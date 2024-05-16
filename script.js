document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#C7E9B4'; // Cor sólida ao rolar a página
    } else {
        header.style.backgroundColor = 'white'; // Cor original do cabeçalho
    }
});
