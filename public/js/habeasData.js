

// Obtener elementos del DOM
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const acceptButton = document.getElementById('accept');
const denyButton = document.getElementById('denegar');
const withdrawLink = document.getElementById('withdraw');


// Mostrar el pop-up al cargar la página
window.onload = function () {
    popup.style.display = 'block';
};

// Cerrar el pop-up al hacer clic en la X
closePopup.onclick = function () {
    popup.style.display = 'none';
};

// Cerrar el pop-up al hacer clic en "Aceptar"
acceptButton.onclick = function () {
    popup.style.display = 'none';
   
};

// Acción al hacer clic en "Retirar Consentimiento"
denyButton.onclick = function () {
    popup.style.display = 'none';
};

