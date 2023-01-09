const { Sequelize }= require("sequelize");

//crear una instancia con parametros de configuracion de nuestra base de datos
//un objeto de configuracion -->
const db= new Sequelize({

      database:"todoapp",
      username: "postgres",
      host: "localhost",
      port: "5432",
      password: "RUTT",
      dialect:"postgres" //DEFINE LA BASE DE DATOS QUE ESTAMOS USANDO
})

module.exports =db