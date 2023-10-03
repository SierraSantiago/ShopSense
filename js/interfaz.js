const elemento = document.querySelector('.elemento-desplazable');

let isDragging = false;
let offsetX, offsetY;

elemento.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - elemento.getBoundingClientRect().left;
    offsetY = e.clientY - elemento.getBoundingClientRect().top;
    elemento.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    
    elemento.style.left = x + 'px';
    elemento.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    elemento.style.cursor = 'grab';
});
