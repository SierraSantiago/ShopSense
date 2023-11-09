import mysql from 'mysql'; 
var conectar = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Tu contraseña de MySQL
    database: 'registroconsentimiento',
});
conectar.connect(function(err) {
    if (err) {
        console.error('Error al conectar a la base de datos:'+ err.stack)
        return;
    }
    console.log('Conexión exitosa ID:'+ conectar.threadId);
});
export {conectar}