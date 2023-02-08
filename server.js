const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.get('/index.html', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.get('/about.html', (req, res) => {
    res.sendFile('./about.html', { root: __dirname });
});

app.get('/menu.html', (req, res) => {
    res.sendFile('./menu.html', { root: __dirname });
});

app.get('/reservation.html', (req, res) => {
    res.sendFile('./reservation.html', { root: __dirname });
});

app.get('/contact.html', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname });
});

app.get('/login.html', (req, res) => {
    res.sendFile('./login.html', { root: __dirname });
});

app.listen(9000, () => {
    console.log("listening on port 9000!")
});