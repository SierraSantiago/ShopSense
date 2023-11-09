import express  from "express";
import { conectar } from "../modelo/db_conectar.js";


var crud_politicas = ({})
crud_politicas.leer = (req, res)=>{ 
    conectar.query('SELECT IdUsuario,HabeasData,DateHabeasData,Consentimientos,DateConsentimientos FROM registroconsentimiento', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.render('politicas.ejs', { resultado: result });
        }
    });
}
export {crud_politicas}