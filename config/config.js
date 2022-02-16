require('dotenv').config();
// vamos a crear la configuracion base para leer nuestras variables de entorno del proyecto

//const { port } = require("pg/lib/defaults");

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 12000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,



}
module.exports={config};



