const cors = require('cors');
//instancia que permite crear la api 
const express = require('express');
//incluimos archivo de rutas routes/index
const routes = require('../routes');
//instancia de express
const server = express();
//usa cors en el server
server.use(cors())
server.options('*',cors());

server.use(express.json());
server.use('/api',routes);
//se exporta objeto server para poder ser usado
module.exports = server; //la linea más importante del code
