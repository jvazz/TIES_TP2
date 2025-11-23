var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul-header');
var body = document.body;
var header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('active')) {
        ul.classList.remove('active');
        body.style.overflow = ''; // Reativa a rolagem

        // Remove modo menu
        header.classList.remove('menu-open');

        // Ícones padrão
        document.querySelector('.menu-icon-white-img').src = 'assets/utils/images/global/MenuIconWhite.png';
        document.querySelector('.menu-icon-black-img').src = 'assets/utils/images/global/MenuIconBlack.png';

    } else {
        ul.classList.add('active');
        body.style.overflow = 'hidden'; // Bloqueia a rolagem

        // Ativa modo menu
        header.classList.add('menu-open');

        // Ícones de fechar
        document.querySelector('.menu-icon-white-img').src = 'assets/utils/images/global/CloseIconWhite.png';
        document.querySelector('.menu-icon-black-img').src = 'assets/utils/images/global/CloseIconBlack.png';
    }
});