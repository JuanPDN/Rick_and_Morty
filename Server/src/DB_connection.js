require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;
const FavoriteModel = require('./models/Favorite.js')
const UserModel = require('./models/User.js')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

//const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`
const URL = DB_DEPLOY

const sequelize = new Sequelize(
   URL,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

FavoriteModel(sequelize)

UserModel(sequelize)

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, {through : 'user_favorite'})
Favorite.belongsToMany (User, {through : 'user_favorite'})

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
