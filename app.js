const express = require('express');
const app = express();
const routeLibros = require('./routes/libros');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

app.use('/Libros', routeLibros);

//Iniciar el servidor
app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});
