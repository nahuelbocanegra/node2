const db= require("../utils/database");
const { DataTypes }= require ("sequelize");
const Category = require("./category.model");
const Todos = require("./todos.model");

const PivotCategories=db.define("todos_categories",{
    id: {
        primaryKey:true,
        type: DataTypes.INTEGER,
         autoIncrement:true,
         allowNull:false
      },
      todo_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        references:{
          model: Todos,
          key:"id"

        }
      },
      categoryId:{
        type: DataTypes.INTEGER,
        allowNull:false,
        field:"category_id",
        references:{
          model: Category,
          key:"id"
        }
      }
},{
  timestamps:false
})
module.exports=PivotCategories;