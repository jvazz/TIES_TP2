window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')

    // Se o menu estiver aberto, não altera o estilo do header com base no scroll
    if (!header.classList.contains('menu-open')) {
        header.classList.toggle('scrolling', window.scrollY > 0)
    }
})