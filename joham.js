const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 5000

express()

   // estamos cargando la carpeta pero de manera estatica 
   .use(express.static(path.join(__dirname, 'public')))

   // cargamos una carpeta normal
   .set('views', path.join(__dirname, 'view'))

     //iniciando el archivo de en /views/pagues/index.ejs
  .get('/', (req, res) => res.render('view/inicio.html'))

  // iniciamos el port de heroku
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))