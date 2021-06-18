const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');
const actione = document.querySelector('.info .actions button i');

moreBtn.addEventListener('click',() => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

actione.addEventListener('click',() => {
    actione.classList.toggle('clicked');
});