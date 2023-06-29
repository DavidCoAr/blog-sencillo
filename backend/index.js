//Creación del servidor en el puerto 3000
const express = require("express");
const app = express();

//Importanción del módulo de conexión a nuestra base de datos
const sequelize = require("./conexion_bs");

// Uso de Cors para que el servidor responda a solicitudes de diferentes orígenes
const cors = require('cors');
app.use(cors());

//Iniciar el servidor tras en el puerto 3000 
app.listen(3000, function(){
    console.log("Sistema funcionando en el puerto 3000");
});