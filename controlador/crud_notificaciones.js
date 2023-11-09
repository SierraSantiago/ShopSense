import  express  from "express";
import { conectar } from "../modelo/db_conectar.js";

var crud_notificaciones = ({})
crud_notificaciones.leer = (req, res)=>{ 
    conectar.query('SELECT IdUsuario,HabeasData,DateHabeasData,Consentimientos,DateConsentimientos FROM registroconsentimiento', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.render('notificaciones.ejs', { resultado: result });
        }
    });
}
export {crud_notificaciones}