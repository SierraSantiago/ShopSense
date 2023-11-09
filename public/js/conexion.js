const mysql = require('mysql');

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Tu contraseña de MySQL
    database: 'registroconsentimiento',
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
    console.log('Conexión exitosa a la base de datos');
});

// Exporta la conexión para que pueda ser utilizada en otros archivos
module.exports = connection;
