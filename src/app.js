//importabamos exprees
const exprees=require("express");
//creear una instancia de express
const db= require("./utils/database")
const app=exprees()
const initModels =require("./models/init.model");
const Users = require("./models/users.model");
const Todos = require("./models/todos.model");
app.use(exprees.json());
const PORT=8000;



db.authenticate()
.then(()=>console.log("autentificacion exitosa"))
.catch((error)=>console.log(error));

initModels();

//vamos a usar el medoto sync de nuestra db 
db.sync({force:false})
.then(()=>console.log("base de datos sincronizada"))
.catch((error)=>console.log(error));

app.get("/",(req,res)=>{
    res.status(200).json({message:"Bienvenido al servidor"})
});
//DEFINIR LAS RUTAS DE NUESTROS ENDPOINTS( EP)
//TODAS LAS CONSULTAS DE USUARIO
//localhost:8000/users --> todo para usuarios

//localhost:8000/todos --> todo para tareas

//get a /users
app.get("/users",async(req,res)=>{
 try {
    // vamos a obtener el resultado de consultar a todos los usuarios de la bd
    const result= await Users.findAll(); //SELECT * FROM users;
    res.status(200).json(result) ;

 } catch (error) {
    console.log(error)
 }
    
});

// obtener un usuario por su id
app.get("/users/:id", async(req,res)=>{
    try {
        const {id}=req.params;
        const result= await Users.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
 
  
});

//usuario por username

app.get("/users/username/:username",async(req,res)=>{
  try {
    const {username}=req.params;
    
    const result=await Users.findOne({where:{username}});// SELECT * FROM users WHERE username= nahuel
    res.status(200).json(result);
} catch (error) {
    console.log(error)
  }


});
// crear


app.post("/users",async (req,res)=>{
    try {
        const user =req.body;
        const result= await Users.create(user);
        res.status(201).json(result);
        
    } catch (error) {
       
        console.log(error)
    }
});

//actualizar un usuario, solo podemos cambiar el password

app.put("/users/:id", async(req,res)=>{
    try {
        const {id}=req.params;
        const field =req.body;
        const result=Users.update(field,{
            where:{id},
        });
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
});

app.delete("/users/:id" ,async(req,res)=>{
    try {
        const {id}=req.params;
        const result  = Users.destroy({where:{
            id}});
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
});

// Tarea Todos
app.get("/todos",async (req,res)=>{
    try {
        const result= await Todos.findAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
});
app.get("/todos/:id",async (req,res)=>{
    try {
        const{id}=req.params;

        const result= await Todos.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
});
app.post("/todos",async (req,res)=>{
    try {
        const todos=req.body;
        const result=  await Todos.create(todos);
        res.status(201).json(result)
        
    } catch (error) {
        console.log(error)
    }
});
app.put("/todos/:id",async (req,res)=>{
    const {id}=req.params;
    const field =req.body;
    const result=Todos.update(field,{
            where:{id},
        });
    res.status(200).json(result)
   
});
app.delete("/users/:id" ,async(req,res)=>{
    try {
        const {id}=req.params;
        const result  = Todos.destroy({where:{
            id}});
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
});

app.listen(PORT,()=>{
    console.log("servidor escuchando en el pueto 8000")
});


