const {Model, DataTypes, Sequelize} = require('sequelize');

//Definir el nombre de la tabla
const USER_TABLE = 'users';

//Definir el esquema

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

//Vamos a definir una clase con nuestro modelo

class User extends Model{
  static associate(){
    // associate
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports={USER_TABLE, UserSchema, User};
