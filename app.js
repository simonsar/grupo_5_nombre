const express = require("express");
const app = express();


app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo");
});

app.get("/detalle-de-producto", (req, res) => {
    res.sendFile(__dirname + '/views/detalle-de-producto.html')
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/home.html')
});

app.get("/detalle-de-producto", (req, res) => {
    res.sendFile(__dirname + '/views/detalle-de-producto.html')
});