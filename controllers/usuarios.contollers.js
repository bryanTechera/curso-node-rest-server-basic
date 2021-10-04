const { response } = require('express');


const usuariosGet = (req, res = response) => {
    //parametros que me llegan por la url, le doy valores por defercto a page y limit
    const { id, nombre, apiKey, page = 0, limit = 5 } = req.query;
    res.json({
        msg: 'usuario get-controller ',
        id,
        nombre,
        apiKey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) => {
    //parametros que me llegan en el body en notacion JSON
    const body = req.body;
    const id = req.params.id;//este id me llega por la URL api/usuarios/1..2..3...
    res.json({
        msg: 'usuario put-controller',
        id,
        body
    });
}

const usuariosPost = (req, res = response) => {
    res.json({
        msg: 'usuario post=controller'
    });
}

const usuarosDelete = (req, res = response) => {
    res.json({
        msg: 'usuario delete-controller'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuarosDelete
}