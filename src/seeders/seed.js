const db=require("../utils/database")
const Users=require("../models/users.model")
const Todos=require("../models/todos.model")
const users=[
    {
        username:"Nahuel",
        email:"nahuboca7@gmail.com",
        password:"1234",
    },
    {
        username:"franco",
        email:"fr7@gmail.com",
        password:"1234",
    },
    {
        username:"pedro",email:"pedro7@gmail.com",password:"1234",
    }
];

const todos=[
    {title:"tarea1",description:"descripcion 1",userId:1},
    {title:"tarea na",userId:1},
    {title:"tarea2",description:"descripcion 2",userId:2},
    {title:"tarea3",description:"descripcion 3",userId:3}
];

const categories=[];

const TodosCategories= [];

db.sync({force:true})
.then(()=>{
    console.log("Iniciando con el sembradio malicioso");
    users.forEach((user)=> Users.create(user))
    setTimeout(()=>{
        todos.forEach(todo=>Todos.create(todo))
    },100)
})
.catch((error)=>{console.log(error)});