let modelPets = require( "../model/pets.json" );

const controllerPets = {

    listaPets:(req,res)=>{
        res.send(modelPets)
    },

};










/* ----------------------------------------- */

module.exports = controllerPets;