let openBtn = document.querySelector('#open__btn');
let modalContainer = document.querySelector('.modal__container');
let closeBtn = document.querySelector('#close__btn');

openBtn.addEventListener('click', ()=>{
    modalContainer.style.display = 'block';
});

closeBtn.addEventListener('click', ()=>{
    modalContainer.style.display = 'none';
});

window.addEventListener('click', (e)=>{
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});
