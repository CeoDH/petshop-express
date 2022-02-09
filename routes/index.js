var express = require( 'express' );
var router = express.Router();
const petsController = require( "../controller/petsController" );

const { usuarioController } = require('../controller/usuarioController');




/* GET home page. */
router.get( '/', function( req, res, ) {
  res.render( 'index', { title: 'Aula 04/02' } );
} );


router.get( '/servico',petsController.listaServicos );

router.get( '/pets',petsController.listaPets );


router.get( '/index',usuarioController.index );

router.get( '/usuario',usuarioController.cadastro );

router.get( '/aula',usuarioController.aula );

router.get( '/contato',usuarioController.contato );

router.get( '/error',usuarioController.error );

router.get( '/login',usuarioController.login );

router.get( '/servicos',usuarioController.servicos );

router.get( '/sobre',usuarioController.sobre );











/* ----------------------------------------- */

module.exports = router;
