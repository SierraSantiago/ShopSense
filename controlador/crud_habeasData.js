import express  from "express";
import { conectar } from "../modelo/db_conectar.js";


var crud_habeasData = ({})
crud_habeasData.leer = (req, res)=>{ 
    conectar.query('SELECT IdUsuario,HabeasData,DateHabeasData,Consentimientos,DateConsentimientos FROM registroconsentimiento', (err, result) => {
        if (err) {
            throw err;
        } else {
            res.render('habeasData.ejs', { resultado: result });
        }
    });
}

crud_habeasData.cud=(req,res)=>{
    const accept =req.body.accept;
    const denegar =req.body.denegar;
    if(accept){
        conectar.query('UPDATE registroconsentimiento SET HabeasData = 1, DateHabeasData = now() WHERE IdUsuario', (err, result) => {
            if (err) {
                throw err;
            } else {
                res.redirect('/habeasData');
            }
        });
    }else if(denegar){
        conectar.query('UPDATE registroconsentimiento SET HabeasData = 0, DateHabeasData = now() WHERE IdUsuario', (err, result) => {
            if (err) {
                throw err;
            } else {
                res.redirect('/habeasData');
            }
        });
    }
};
export {crud_habeasData}