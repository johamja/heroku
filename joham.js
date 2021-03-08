const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 5000

express()

   /*
   // estamos cargando la carpeta pero de manera estatica 
   .use(express.static(path.join(__dirname, 'public')))

   // cargamos una carpeta normal
   .set('views', path.join(__dirname, 'view'))

     //iniciando el archivo de en /views/pagues/index.ejs
     */ 

     use(express.static("public"));

     use(express.static("view"));

/* vamos a iniciar el archivo html */
   .get("/", (req, res) =>{
   res.sendFile(path.resolve(__dirname,"view/inicio.html"))
})

  // iniciamos el port de heroku
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))