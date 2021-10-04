const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuarosDelete } = require('../controllers/usuarios.contollers');

const router = Router();

router.get('/', usuariosGet);//obtencion de registros

router.put('/:id', usuariosPut);//actualizar recuersos => el id me llega por la url

router.post('/', usuariosPost);//crear nuevos recursos

router.delete('/', usuarosDelete);//borrado de recursos



module.exports = router;