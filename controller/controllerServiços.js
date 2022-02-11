let modelServico = require( "../model/servico.json" );

const controllerServiços = {

    listaServiços:(req,res)=>{
        res.send(modelServico);
    },

};










/* ----------------------------------------- */

module.exports = controllerServiços;