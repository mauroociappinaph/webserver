const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get("*", (req, res) => {
    res.send('400 | Bad Request');
});

app.listen(3000, () => {
    console.log(`Escuchando en puerto ${port}!`);
});
