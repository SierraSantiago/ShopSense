const connection = require('../js/conexion'); // Asegúrate de ajustar la ruta al archivo db.js si es necesario

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
    connection.query('UPDATE registroconsentimiento SET HabeasData = 1,DateHabeasData = NOW()  WHERE IdUsuario = 1001369917');
};

// Acción al hacer clic en "Retirar Consentimiento"
denyButton.onclick = function () {
    popup.style.display = 'none';
    // Aquí puedes implementar la lógica para retirar el consentimiento
    alert('Consentimiento retirado. Sus datos no serán recopilados.');
};

