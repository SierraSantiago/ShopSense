const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registroconsentimiento'
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión exitosa a la base de datos');
});

//Mostrar
connection.query('SELECT * FROM registroconsentimiento', (err, rows) => {
    if (err) throw err;

    console.log('Data received from Db:');
    console.log(rows);
});

// Definir una ruta para obtener los datos
app.get('/obtener-datos', (req, res) => {
    // Realiza la consulta a la base de datos para obtener los datos
    // Debes utilizar la lógica adecuada para tu base de datos y la consulta
    const data = {
        IdUsuario: 1001369917,
        HabeasData: 0,
        DateHabeasData: '2023-10-17 14:30:00',
        Consentimientos: 0,
        DateConsentimientos: '2023-10-17 14:30:00'
    };
    
    // Envia los datos como respuesta en formato JSON
    res.json(data);
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});


module.exports = connection;


