const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    const header = card.querySelector('.card-header');
    const content = card.querySelector('.card-content');
    const icon = card.querySelector('.icon');

    header.addEventListener('click', () => {
        card.classList.toggle('active');
        if (card.classList.contains('active')) {
            content.innerHTML = `<p>Section Opened</p>`;  
        } else {
            content.innerHTML = `<p>Section Closed</p>`;
        }
    });
});
