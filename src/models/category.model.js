const db= require("../utils/database");
const { DataTypes }= require ("sequelize");
const Category =db.define("category",{
    id: {
      primaryKey:true,
      type: DataTypes.INTEGER,
       autoIncrement:true,
       allowNull:false
    },  
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        
    },
    todo_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true
      },
},
{
  timestamps:false,
})

module.exports=Category;