import express from "express";
import { conectar } from "../modelo/db_conectar.js";

var crud_notificaciones = ({})
crud_notificaciones.leer = (req, res) => {
    conectar.query('SELECT IdUsuario,HabeasData,DateHabeasData,Consentimientos,DateConsentimientos FROM registroconsentimiento', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.render('notificaciones.ejs', { resultado: result });
        }
    });
}
crud_notificaciones.cud = (req, res) => {
    const accept = req.body.accept;
    const denegar = req.body.denegar;
    if (accept) {
        conectar.query('UPDATE registroconsentimiento SET Consentimientos = 1, DateConsentimientos = now() WHERE IdUsuario', (err, result) => {
            if (err) {
                throw err;
            } else {

            }
        });
    } else if (denegar) {
        conectar.query('UPDATE registroconsentimiento SET Consentimientos = 0, DateConsentimientos = now() WHERE IdUsuario', (err, result) => {
            if (err) {
                throw err;
            } else {

            }
        });
    }
};
export { crud_notificaciones }