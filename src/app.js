const express = require("express");
const app = express();
const mainRoutes = require('./routes/mainRoutes');

const path = require('path')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo");
});

app.use("/", mainRoutes);

app.use("/detalle", mainRoutes);

app.use('/login', mainRoutes);

app.use('/register', loginRoutes);

app.use('/carrito', mainRoutes);

app.use('/editar', mainRoutes);

app.use('/products', mainRoutes);

app.use('/products/create', mainRoutes);

