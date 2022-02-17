// Se encargara de enviar la conexion hacia los modelos

const { User, UserSchema }= require('./user.model');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
}

module.exports=setupModels;
