import express from "express";
import { crud_habeasData } from "./controlador/crud_habeasData.js";
import { crud_consentimientos } from "./controlador/crud_consentimientos.js";
import { crud_politicas } from "./controlador/crud_politicas.js";
import { crud_notificaciones } from "./controlador/crud_notificaciones.js";

const app_e = express();

app_e.use(express.urlencoded({ extended: false }));
app_e.use(express.json());

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

app_e.get('/consentimientos',crud_consentimientos.leer); 

app_e.get('/habeasData',crud_habeasData.leer);

app_e.get('/politicas', crud_politicas.leer);

app_e.get('/notificaciones', crud_notificaciones.leer);




//Metodo Post
app_e.post('/crud_h',crud_habeasData.cud);

app_e.post('/crud_n',crud_notificaciones.cud);