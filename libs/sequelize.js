const {Sequelize}=require('sequelize');

const {config}= require('./../config/config');

const USER=encodeURIComponent(config.dbUser);
const PASSWORD=encodeURIComponent(config.dbPassword);
const URI=`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// Pasamos la URI y la base de datos que estamos usando

const sequelize=new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

module.exports=sequelize;
