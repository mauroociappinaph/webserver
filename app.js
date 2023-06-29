const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(3000, () => {
    console.log(`Escuchando en puerto ${port}!`);
});
