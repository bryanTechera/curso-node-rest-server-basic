require('dotenv').config();
const Server = require('./models/server');

const serv = new Server();

serv.listener();