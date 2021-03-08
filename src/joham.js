/** llamaremos la libreria de la instalacion express */
const path = require('path');

const express = require('express');

/** esta corriendo de manera local  */
/*    const { hostname } = require('os');    */

/** esta corriendo de manera router */
const app = express();

app.set("port", process.env.PORT || 3000);

/* vamos a iniciar el archivo html */
app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname,"html/inicio.html"))
})

/* añadir las carpetas de carga de nuestro seervidor */
/* para la carpeta html */
app.use(express.static("html"));

/* para la carpeta css */
app.use(express.static("css"));

/* para la carpeta img */
app.use(express.static("img"));

/* para la carpeta src */
app.use(express.static("src"));


/** vamos a inprimar un texto en nuestra consola para sasver el puerto  */
app.listen(port, () => {
    console.log(`servidor esta corriendo en http://${hostname}:${port}/`);
})