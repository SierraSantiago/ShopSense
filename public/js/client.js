document.addEventListener('DOMContentLoaded', function () {
    const loadDataButton = document.getElementById('loadDataButton');

    loadDataButton.addEventListener('click', function () {
        // Realiza una solicitud al servidor para obtener los datos
        fetch('/obtener-datos')
            .then(response => response.json())
            .then(data => {
                // Actualiza la tabla con los datos recibidos del servidor
                document.getElementById('IdUsuario').textContent = data.IdUsuario;
                document.getElementById('HabeasData').textContent = data.HabeasData;
                document.getElementById('FechaHabeasData').textContent = data.FechaHabeasData;
                document.getElementById('Consentimiento').textContent = data.Consentimiento;
                document.getElementById('FechaConsentimiento').textContent = data.FechaConsentimiento;
            })
            .catch(error => {
                console.error('Error al cargar datos:', error);
            });
    });
});
