const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 5000

express()

   
   // estamos cargando la carpeta pero de manera estatica 
   .use(express.static(__dirname + '/public'))

   // cargamos una carpeta normal
   .set('views',(__dirname + '/views'))
     //iniciando el archivo de en /views/pagues/index.ejs

     .set('src',(__dirname + '/src'))
     
   /* vamos a iniciar el archivo html */
   .get("/", (req, res) =>{
   res.sendFile(path.resolve(__dirname,"view/inicio.html"))
  })
   
   .get("/jajo", (req, res) =>{
     res.sendFile(path.resolve(__dirname,"view/pagina2.html"))
   })

   .get("/jajo2", (req, res) =>{
     res.sendFile(path.resolve(__dirname,"view/casa.html"))
   })

   .get("/motivacion" , (req, res)=>{
     res.sendFile(path.resolve(__dirname,"view/motivacion.html"))
   })

   .get("/una_vida" , (req, res)=>{
    res.sendFile(path.resolve(__dirname,"view/un_año.html"))
  })

  // iniciamos el port de heroku
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))