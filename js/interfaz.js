const elemento = document.querySelector('.elemento-desplazable');
const overlay = document.getElementById('overlay');

let isDragging = false;
let offsetX, offsetY;
let clickTimeout;

elemento.addEventListener('mousedown', (e) => {
    // Prevent the default behavior of the image drag in some browsers
    e.preventDefault();
    
    // Set a timeout to determine if it's a click or drag action
    clickTimeout = setTimeout(() => {
        // If the timeout is reached, it's a drag action
        isDragging = true;
        offsetX = e.clientX - elemento.getBoundingClientRect().left;
        offsetY = e.clientY - elemento.getBoundingClientRect().top;
        elemento.style.cursor = 'grabbing';
    }, 200); // Adjust the timeout duration as needed
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    
    elemento.style.left = x + 'px';
    elemento.style.top = y + 'px';
});

document.addEventListener('mouseup', (e) => {
    const left = parseInt(elemento.style.left);
    const top = parseInt(elemento.style.top);
    // Clear the click timeout
    clearTimeout(clickTimeout);
    
    if (isDragging) {
        // If it's a drag action, reset dragging state and cursor
        isDragging = false;
        elemento.style.cursor = 'grab';
    } else if (e.target === elemento) {
        // If it's a click action within the elemento-desplazable, display the overlay
        overlay.style.display = 'block';
        overlay.style.left = left + 'px';
        overlay.style.top = top + 'px';
    }
});
