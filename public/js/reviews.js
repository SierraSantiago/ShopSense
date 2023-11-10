const stars = document.querySelectorAll('.star');
const commentInput = document.getElementById('comment');
const submitButton = document.getElementById('submit');
const commentsDiv = document.getElementById('comments');

// Manejar clic en las estrellas
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-rating');
        // Marcar estrellas seleccionadas y deseleccionar las demás
        stars.forEach(s => {
            if (s.getAttribute('data-rating') <= rating) {
                s.classList.add('selected');
            } else {
                s.classList.remove('selected');
            }
        });
    });
});

// Manejar clic en el botón de envío de comentario
submitButton.addEventListener('click', () => {
    const comment = commentInput.value;
    if (comment.trim() !== '') {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsDiv.appendChild(commentElement);
        commentInput.value = '';
    }
});
