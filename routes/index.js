let express = require( 'express' );
let router = express.Router();
const controllerPets = require( "../controller/controllerPets" );
const controllerServiços = require( "../controller/controllerServiços" );

const { controllerUsuario } = require('../controller/controllerUsuario');




/* GET home page. */
/* router.get( '/', function( req, res, ) {
  res.render( 'index', { title: 'Aula 04/02' } );
} ); */

router.get('/',controllerUsuario.index)

router.get( '/servico',controllerServiços.listaServiços );

router.get( '/pets',controllerPets.listaPets );


router.get( '/index',controllerUsuario.index );

router.get( '/usuario',controllerUsuario.cadastro );

router.get( '/aula',controllerUsuario.aula );

router.get( '/contato',controllerUsuario.contato );

router.get( '/error',controllerUsuario.error );

router.get( '/login',controllerUsuario.login );

router.get( '/servicos',controllerUsuario.servicos );

router.get( '/sobre',controllerUsuario.sobre );











/* ----------------------------------------- */

module.exports = router;
