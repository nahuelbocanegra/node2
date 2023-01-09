//vamos a importar todos nuestros modelos creados

const Users = require("./users.model")
const Todos=require("./todos.model")
const  Category=require("./category.model")
const PivotCategories = require("./todo_categories.model")

const initModels= ()=>{
   
    //relaciones
    //hasOne --> para indicar que tiene un
    //hasMany --> tiene muchos
    //belengsTo --> pertenence a

    Todos.belongsTo(Users ,{as:"author" ,foreignKey:"user_id"});
    Users.hasMany(Todos ,{as:"task" ,foreignKey:"user_id"});

    //relacion M-M 
    PivotCategories.belongsTo(Todos,{as:"task",foreignKey:"todo_id"});
    Todos.hasMany(PivotCategories,{as:"category" ,foreignKey:"todo_id"});

    PivotCategories.belongsTo(Category,{as:"category",foreignKey:"category_id"});
    Category.hasMany(PivotCategories,{as:"task",foreignKey:"category_id"});
}

module.exports=initModels