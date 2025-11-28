document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.general .card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });
});