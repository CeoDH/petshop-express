

const usuarioController = {

    cadastro:( req, res ) => {
        //render
        res.render( "cadastro" )
    },
    aula:( req, res ) => {
        //render
        res.render( "aula" )
    },
    contato:( req, res ) => {
        //render
        res.render( "contato" )
    },
    error:( req, res ) => {
        //render
        res.render( "error" )
    },
    login:( req, res ) => {
        //render
        res.render( "login" )
    },
    servicos:( req, res ) => {
        //render
        res.render( "servicos" )
    },
    sobre:( req, res ) => {
        //render
        res.render( "sobre" )
    },

};








/* ---------------------------------------------------------- */
module.exports = {
    usuarioController,
};