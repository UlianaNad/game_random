const field = document.querySelector('.field');
const item = document.querySelector('.item');

item.addEventListener('click', () => {
   let x = Math.floor(Math.random() * 850) + 'px';
   let y = Math.floor(Math.random() * 550) + 'px';

    item.style.left = x;
    item.style.top = y;
})