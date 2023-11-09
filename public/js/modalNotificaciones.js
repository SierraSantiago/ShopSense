document.addEventListener("DOMContentLoaded", function () {
    // Función para manejar el clic en el botón "Aceptar"
    function aceptarClick() {
        alert("Notificaciones aceptadas");
        cerrarModal();
    }

    // Función para manejar el clic en el botón "Rechazar"
    function rechazarClick() {
        alert("Notificaciones rechazadas");
        cerrarModal();
    }

    // Abre el modal automáticamente al cargar la página
    const modal = document.getElementById("modal");
    modal.style.display = "block";

    // Obtén los botones por sus IDs
    const aceptarBtn = document.getElementById("aceptarArea");
    const rechazarBtn = document.getElementById("rechazarArea");

    // Agrega manejadores de clic a las áreas de imagen
    aceptarBtn.addEventListener("click", aceptarClick);
    rechazarBtn.addEventListener("click", rechazarClick);

    // Función para cerrar el modal
    function cerrarModal() {
        modal.style.display = "none";
    }
});

