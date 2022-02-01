const express = require('express');

const app = express ();

let path = require ("path");

app.use(express.static('public'));

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{ console.log('Servidor corriendo en http://localhost:3000/'); });

app.get('/', (req,res)=>{    res.sendFile(path.resolve("./views/home.html")); });

app.get('/register', (req,res)=>{    res.sendFile(path.resolve("./views/register.html")); });

app.get('/login', (req,res)=>{    res.sendFile(path.resolve("./views/login.html")); });