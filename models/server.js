const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        //Rutas de mi app
        this.routes();
    }


    middlewares() {
        //CORS protege el appi de forma superficial limitando el acceso a las rutas a los cliente que querramos
        this.app.use(cors());
        //Lectura y parseo del body de las peticiones
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/usuarios', require('../routes/usuarios.routes'));
    }

    listener() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        })
    }

}

module.exports = Server;