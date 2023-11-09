import express from "express";
import { conectar } from "./modelo/db_conectar.js";
const app_e = express();
app_e.use(express.static('./vista'));
app_e.use(express.static('./controlador'));
app_e.use(express.static('./modelo'));


//Motor de vistas 
app_e.set('views', './vista');
app_e.set('view engine', 'ejs');

// configuracion de css,img y js a ejs
app_e.use(express.static('public'));

app_e.listen('5000', function () {
    console.log('server is running in: http://localhost:5000/ ');
});

app_e.get('/', function (req, res) {
    conectar.query('SELECT * FROM registroconsentimiento', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.render('concentimiento.ejs', { resultado: result });
        }

    });
    
});
