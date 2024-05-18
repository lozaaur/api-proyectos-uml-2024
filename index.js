//Importar las librerias necesarias
const express=require("express");
const mysql=require("mysql2");
const cors=require("cors");
const bodyparser=require("body-parser");
const nodemon=require("nodemon");

//Datos de la conexion
const config= {
    host: "127.0.0.1",
    user:"root",
    password:"2006auroraloza",
    database:"proyectos"
}
// Conexion a la base de datos
const db = mysql.createConnection(config);

//Verificar la conexion
db.connect((err) => {
if (err){
    console.log("Error de conexión", err);
    return;
}
    console.log("Conexión exitosa");


});

//crear el servidor con express
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

//Ruta para obtener todos los proyectos
app.get("/proyectos", (req, res) => {
  db.query ("SELECT * FROM proyectos", (err, result) => {
    if (err) {
        console.log("Error para obtener los proyectos",err);
        return;
        
        }
        res.json(result);

        
    });

});



app.listen(3000, () =>{
       console.log("servidor corriendo en el puerto 3000")
})
