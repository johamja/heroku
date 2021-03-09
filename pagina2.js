
const path = require('path')


   .get("/", (req, res) =>{
   res.sendFile(path.resolve(__dirname,"view/pagina2.html"))
  })
