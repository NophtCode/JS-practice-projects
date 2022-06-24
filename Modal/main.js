const btn = document.querySelector('.btn');
const modal = document.getElementById('modal-wrapper');
const closeBtn = document.querySelector('.close-btn');


function modalFunction(b, m, c) {
    b.addEventListener('click', () => {
        m.classList.add('show');
    });
    c.addEventListener('click', () => {
        m.classList.remove('show');
    });
}

modalFunction(btn, modal, closeBtn);