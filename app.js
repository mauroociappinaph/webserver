const express = require('express');
const app = express();

require("dotenv").config();
const port = process.env.PORT ;

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('./views/home.hbs', {
        nombre: 'Mauroo Ciappina',
        titulo: 'Viaje por Carretera',
    });
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/back/Template/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/back/Template/elements.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/back/404.html');
});

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}!`);
});
